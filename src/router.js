import React from "react";
import Home from './pages/Home';
import Developer from './pages/Developer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export default function RouterExample() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/developers">
                <Developer />
            </Route>
        </Switch>
    );
}
