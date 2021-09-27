import React from "react";
import Home from './pages/Home';
import Developer from './pages/Developer';
import Faq from './pages/Faq';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { BrowserRouter, HashRouter } from 'react-router-dom';
import history from './history';

export default (prop) => (
    <HashRouter history={history} forceRefresh={true}>
        <Switch>
            {/* <Route exact path="/" component={() => <Main  history={history} />} /> */}
            <Route exact path="/" component={() => <Home history={history} />} />
            <Route exact path="/developers" component={() => <Developer history={history} />} />
            <Route exact path="/faqs" component={() => <Faq history={history} />} />
            <Route component={() => <Home history={history} />} />
        </Switch>
    </HashRouter>
);
