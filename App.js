import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // होम पेज जहां Register बटन होगा
import CricketTeamForm from "./CricketTeamForm"; // रजिस्ट्रेशन फॉर्म पेज

const App = () => {
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/register"
        element = { < CricketTeamForm / > }
        /> <
        /Routes> <
        /Router>
    );
};

export default App;