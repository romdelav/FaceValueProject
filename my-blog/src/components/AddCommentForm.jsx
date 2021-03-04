import React, {useState} from 'react';

const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const AddComment = async() => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method:'POST',
            body: JSON.stringify({username, text: commentText}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        
        setUsername('');
        setCommentText('');
    }

    return(
    <>
    <div className="grid-container">
        <div className="cell8">
        <div className="commentBox">
        <h3>Add a comment</h3>
        <br/><br/>
        <label>
            Name:&nbsp; 
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
        </label>
        <br/><br/>
        <label>
            Comment:&nbsp; 
            <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)}/>
        </label>
        <br/><br/>
        <button onClick={() => AddComment()}>Add comment</button>
    </div>
        </div>
    </div>
    
    
    </>
    );
}

export default AddCommentForm; 
