import {BrowserRouter, BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import composition from "./Components/composition/composition";
import Health from "./Components/Health/Health";
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="container-inner">
                <BrowserRouter>
                    <div className="btns">
                        <NavLink to="/">Главная</NavLink>
                        <NavLink to="/Health">Здоровье</NavLink>
                        <NavLink to="/composition">Состав</NavLink>
                    </div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/Health" component={Health}/>
                        <Route path="/composition" component={composition}/>
                        <Route render={() => <h1>NOT FOUND</h1>}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
