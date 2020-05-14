import React from 'react';
import { Grid, Cell } from 'react-mdl';
import mypic1 from '../assets/images/mypic1.png';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landing-grid">
                <Grid>
                    <Cell col={12}>
                        <img src={mypic1} alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1> Full Stack Developer</h1>
                            <hr/>
                            <p>
                                Java | Python | Gradle | Docker | MERN Stack | HTML | CSS
                            </p>

                            <div className="social-links">
                                <a href="https://github.com/RohitKeswani" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.facebook.com/rohit.keswani.3386" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.instagram.com/rohithkeswani/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/rohit-keswani/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" ></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <Grid className="footer">
                    <Cell col={12}>
                        Created with <i className="fa fa-heart" aria-hidden="true"></i> by Rohit Keswani.
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;