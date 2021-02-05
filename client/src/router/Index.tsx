import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "../screens/Home";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={Home}/>
            </Switch>
        </Router>
    );
};

export default App;
