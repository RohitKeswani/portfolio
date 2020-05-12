import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

const Main = () => (
    <Switch>
        <Route exact path ="/" component ={Landingpage}/>
        <Route path ="/about" component ={About}/>
        <Route path ="/contact" component ={Contact}/>
        <Route path ="/education" component ={Education}/>
        <Route path ="/experience" component ={Experience}/>
        <Route path ="/projects" component ={Projects}/>
    </Switch>
)

export default Main;