import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import CupList from "./CupList";

class Main extends React.Component {
    render() {
        return (
            <Router>
                <h1>Found your favorite design</h1>
                <div>
                    <Route path="/main/:id" component={CupList}/>
                </div>
            </Router>
        )
    }
}

export default Main
