import React from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends React.Component{
    render(){
        return(
            <div style={{width:'100%', margin:"auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://getdrawings.com/free-icon/cool-profile-icons-69.png" alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1> Full Stack Developer</h1>
                            <hr/>
                            <p>
                                Java | Python | HTML | CSS | React | NodeJS | MongoDB
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
            </div>
        );
    }
}

export default LandingPage;