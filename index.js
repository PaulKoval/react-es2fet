import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Main from './modules/dashboard/components/Main';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/main">Main</Link>
                </li>
            </ul>
            <Route path="/" component={App}/>
            <Route path="/main" component={Main}/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

