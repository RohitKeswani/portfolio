import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './LandingPage';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => (
    <Switch>
        <Route exact path ="/" component ={Landingpage}/>
        <Route path ="/resume" component ={Resume}/>
        <Route path ="/contact" component ={Contact}/>
        <Route path ="/projects" component ={Projects}/>
    </Switch>
)

export default Main;