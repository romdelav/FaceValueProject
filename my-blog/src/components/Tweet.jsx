import React from 'react';

var dateFormat = require("dateformat");

const Tweet = ({tweets}) => (
    <>
            {tweets.map((tweet, key) => 
                <table>
                    <th>
                        <div key={key} className="tweet-style1">
                            <img src={tweet.user.profile_image_url} alt="not found" className="tweet-img"/>
                            <span className="tweet-style3 paddingleft marginbttm">{tweet.user.screen_name}</span>
                            <span className="tweet-style2 paddingleft marginbttm">@{tweet.user.name}</span>
                            <span className="tweet-style2 paddingleft marginbttm">{dateFormat(tweet.created_at, "m/d/yy h:MM TT")}</span>
                            <p className="tweet-style4">{tweet.text}</p>    
                        </div>  
                    </th>
                </table>
                 
            )}
    </>
)

export default Tweet;
