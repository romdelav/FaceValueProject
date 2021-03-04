import React from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleContent from '../components/ArticleContent';

const ArticlesListPage = () => (
    <>
    <h2 className="post-header">Recent Posts</h2>
    <br/><br/>
        <div className="article-list">
            <ArticlesList articles={ArticleContent}/>
        </div>
        
    </>
)

export default ArticlesListPage;