import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    <br/><br/>
    {articles.map((article, key) => (
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
            <div className="grid-container">
                <div className="cell6">
                    <table>
                        <th>
                            <div className="article-list-item">
                                <h2>{article.title}</h2>
                                <p className="articles-details2">{article.content[0].substring(0, 150)}...</p> 
                                <div className="article-details1">
                                    <span>{article.date}</span>
                                    <span className="paddingleft">|</span>
                                    <span className="paddingleft">reading time: {article.readingTime}</span>
                                </div>
                            </div>
                            <br/><br/>
                        </th>
                    </table> 
                </div>
                
            </div>
        </Link>
    ))}
    </>
);

export default ArticlesList;