import React from 'react';
import './App.css';
import { Layout,Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '726px', position: 'relative'}}>
    <Layout>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/about">About Me</Link>
                <Link to="/education">Education</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/about">About Me</Link>
                <Link to="/education">Education</Link>
                <Link to="/experience">Experience</Link>
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