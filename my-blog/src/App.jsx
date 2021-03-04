import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage';
import TweetFeedPage from './pages/TweetFeedPage'
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';

function App() {
    return ( 
        <Router >
            <div>
                <NavBar />
                <div id="page-body">
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/tweets" component={TweetFeedPage} />
                        <Route path="/articles-list" component={ArticlesListPage} />
                        <Route path="/article/:name" component={ArticlePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    
                </div>
            </div> 
        </Router>
    );
}

export default App;
