import React from 'react';
import {Grid, Cell} from 'react-mdl';
import mypic3 from '../assets/images/mypic3.png'

class About extends React.Component{
    render(){
        return(
            <div className="aboutme">
               <Grid>
                   <Cell col={12}>
                       <img src={mypic3} alt="avatar" style={{height:"200px"}}/>
                       <p style={{justifyContent:"left"}}>
                           As you already know, my name is Rohit Keswani and I am a full stack developer. I have an Master's degree in 
                           Computer Science from Rochester Institute of Technology in Rochester, New York. Before that, I was studying at
                           University of Mumbai in Mumbai, India. I pursued Bachelor's of Engineering in Information Technology.
                           <br/>
                           Apart from the Academic details about me, I have interned with Paychex Inc as a Software Developer. During my
                           undergrad degree from University of Mumbai, I had experience working with a few of start-ups as a Web Developer
                           Intern. It was a great opportunity to learn and implement the knowledge that I gained academically.
                           <br/>
                           I would consider myself as someone who is curious about evolving technologies, and am quite dependent on them as
                           well. I am always interested to learn new languages. I love watching stand-up comedy, and would like to create my act 
                           someday. I am always curious about Aviation works. So many flights, so many routes and so many people and all of them
                           are above the ground and somehow everything works fine just amazes me. I am awed by the scale and magnitude of operations
                           of Airline industry.
                           <br/>
                           In the next few years, I see myself working as a Full-stack Developer, learning about production environments, creating
                           apps that are useful to people in everyday life. Later on, I wish to have my own company working in the domain that 
                           interests me the most. Parallely, I would like if in next few years I can get Pilot's license for non-commericial flights.
                       </p>
                   </Cell>
               </Grid>
            </div>
        );
    }
}

export default About;