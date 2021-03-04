import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = require('express')();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config({ path: 'src/.env' });

app.listen(8000, () => {
    console.log(`Listening on port 8000`)
});

const CONNECTION_URL = 'mongodb://localhost:27017';
var database, collection;

const Twit = require('twit');
var client = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = client.stream('statuses/filter', { track: 'facial recognition', language: 'en' });
stream.on('tweet', function(tweet) {
    console.log(tweet);

    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db('tweetdb');
        collection = database.collection('tweets');

        collection.insertOne(tweet, function(err, res) {
            if (err) throw err;
            console.log("Record inserted");
        });
    });
})

app.get('/tweets', (req, res) => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, { useUnifiedTopology: true }, (error, client) => {
        if (error) {
            throw error;
        }

        database = client.db('tweetdb');
        collection = database.collection('tweets');
        collection.find({}).sort({ _id: -1 }).limit(10).toArray((error, result) => {
            if (error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    });

});

app.get('/api/articles/:name', (req, res) => {
    try {
        const articleName = req.params.name;

        MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, { useUnifiedTopology: true });
        const db = client.db('my-blog');

        const articleInfo = db.collection('articles').findOne({ name: articleName });

        res.status(200).json(articleInfo);

        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connection to db', error });
    }
});

app.post('api/articles/:name/add-comment', async(req, res) => {
    try {
        const { username, text } = req.body;
        const articleName = req.params.name;

        const client = await MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, { useUnifiedTopology: true });
        const db = client.db('my-blog');
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text })
            },
        });

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);

        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connection to db', error });
    }
});