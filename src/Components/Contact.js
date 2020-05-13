import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import mypic1 from '../assets/images/mypic1.png'

class Contact extends React.Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Rohit Keswani</h2>
                        <hr/>
                        <img src={mypic1} alt="avatar" style={{height: "250px", paddingTop:"2em"}}/>
                        <p style={{width:"75%", margin :"auto", paddingTop:"1em"}}>
                            Hi, feel free to reach out to me if you would like to discuss about a opportunity or 
                            if you would like to know more about me. :)
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>
                            Contact me
                        </h2>
                        <hr/>
                        <div className="contact-list">
                        <List className="list-content">
                            <ListItem>
                                <ListItemContent style={{color: "#2c3e50", fontSize:"25px", fontFamily:"Oxygen"}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    <a href="tel:+1-585-479-0782">+1-585-479-0782</a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{color: "#2c3e50", fontSize:"25px", fontFamily:"Oxygen"}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    <a href="mailto:rhareshk@gmail.com">rhareshk@gmail.com</a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{color: "#2c3e50", fontSize:"25px", fontFamily:"Oxygen"}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    <a href="mailto:rohit.keswani@mail.rit.edu">rohit.keswani@mail.rit.edu</a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{color: "#2c3e50", fontSize:"25px", fontFamily:"Oxygen"}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    <a href="skype:rhareshk_1?chat">rhareshk_1</a>
                                </ListItemContent>
                            </ListItem>                        
                        </List>
                        </div>
                    </Cell>
                </Grid>
           </div>
        );
    }
}

export default Contact;