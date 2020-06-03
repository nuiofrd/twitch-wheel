import React, { useState, useEffect } from "react";
import useStickyState from "./customHooks/StickyState";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import tmi from "tmi.js";

function App() {
    const [username, setUsername] = useStickyState([], "username");
    const [oauthToken, setOauthToken] = useStickyState([], "oauthToken");
    const [authenicated, setAuthenticated] = useState(false);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/viewer">
                        <h1>To be Built</h1>
                    </Route>
                    <Route path="/">
                        <Home
                            setAuthenticated={setAuthenticated}
                            username={username}
                            oauthToken={oauthToken}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
