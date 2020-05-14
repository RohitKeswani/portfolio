import React from 'react';
import './App.css';
import { Layout,Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Routes';
import {Link} from 'react-router-dom';
import logo from './assets/images/logo.png';

function App() {
  return (
    <div style={{height: '726px', position: 'relative'}}>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:"none", color:"white"}} to="/"><img src={logo} alt="logo" style={{height:"2.5em"}}/></Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:"none"}} to="/">Rohit Keswani</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Main></Main>
        </Content>
    </Layout>
</div>
  );
}

export default App;