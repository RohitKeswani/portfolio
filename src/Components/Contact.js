import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Rohit Keswani</h2>
                    <hr/>
                    <img src="https://getdrawings.com/free-icon/cool-profile-icons-69.png" alt="avatar" style={{height: "250px", paddingTop:"2em"}}/>
                    <p style={{width:"75%", margin :"auto", paddingTop:"1em"}}>Hi, I am a software developer. I enjoy reading books, 
                    learning about new technologies and always curious about aviation.</p>
                </Cell>
                <Cell col={6}>
                    <h2>
                        Contact me
                    </h2>
                    <hr/>
                    <div className="contact-list">
                    <List className="list-content">
                        <ListItem>
                            <ListItemContent style={{fontSize:"28px", fontFamily:"Anton"}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (585-479-0782)
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:"28px", fontFamily:"Anton"}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                rhareshk@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:"28px", fontFamily:"Anton"}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                skypeid
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