import React, { useState, useEffect } from 'react';
import ArticleContent from '../components/ArticleContent';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({match}) => {

    const name = match.params.name;
    const article = ArticleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch(`https://localhost:8000/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    });

    if(!article) return <NotFoundPage />

    return (
        <>
        <div className="grid-container">
            <div className="cell7">
                <h1 className="italic">{article.title}</h1>
                <br/><br/>
                {article.content.map((paragraph, key)  => (
                <p key={key}>{paragraph}</p>
                ))}
                <br/><br/><br/>
                <CommentsList comments={articleInfo.comments} />
                <br/><br/>
                <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
                <br/><br/><br/><br/>
            </div>
        </div>
        
        </>
    )
}

export default ArticlePage;
