import React, {useState, useEffect} from 'react';
import Tweet from '../components/Tweet';


const TweetFeedPage = () => {
    
    const [tweetInfo, setTweetInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/tweets`);
            const body = await result.json();
            setTweetInfo(body);
        }
        fetchData();
    }, []);
    
    function refreshPage() {
        window.location.reload();
    }

    function visitTwitter() {
        window.location.assign('https://twitter.com/login');
    }

    return (
        <>
        <div className="grid-container bckgdColor">
            <div className="cell7 center">
                <br/><br/><br/>
                <button className="btnStyle" onClick={refreshPage}>refresh tweets</button>
                &nbsp;&nbsp;&nbsp;
                <button className="btnStyle" onClick={visitTwitter}>join the conversation</button>
                <br/><br/><br/>
                <Tweet tweets={tweetInfo}/>
                <br/><br/><br/><br/>
               
            </div>
        </div>
        </>
    );
}

export default TweetFeedPage;
