import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Investor from './Investor';
import Researcher from './Researcher';
import Home from './Home';
import Private from './Private';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/investor" component={Investor}/>
            <Route exact path="/researcher" component={Researcher}/>
            <Route exact path="/private" component={Private}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
