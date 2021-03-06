import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import  Images  from "./Carousel";
import Home from "./pages/Home";
import Arts from "./pages/Arts"
// import Images from "./Carousel";


function App(){
    return (  
    <>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                {Home}
                </Route>
                <Route path="/arts" exact>
                    {Arts}
                </Route>

            </Switch>
        </Router>
    </>
    );
}

export default App;