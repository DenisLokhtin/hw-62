import axios from "axios";
import {BrowserRouter, BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contacts from "./Components/Contacts/Contacts";
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="container-inner">
                <BrowserRouter>
                    <div className="btns">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/AboutUs">About Us</NavLink>
                        <NavLink to="/Contacts">Contacts</NavLink>
                    </div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/AboutUs" component={AboutUs}/>
                        <Route path="/Contacts" component={Contacts}/>
                        <Route render={() => <h1>NOT FOUND</h1>}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
