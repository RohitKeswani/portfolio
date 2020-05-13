import React from 'react';
import Education from './Education';
import Experience from './Experience';
import About from './About';
import {Grid, Cell} from 'react-mdl';

class Resume extends React.Component{
    render(){
        return(
            <Grid>
                <Cell className="resume-left" col={4}>
                    <About></About>
                </Cell>
                <Cell className="resume-right" col={8}>
                    <h2 style={{color:"#ecf0f1"}}>Education</h2>
                    <hr/>
                    <Education startYear="2017" endYear="2020" universityName="Rochester Institute of Technology"
                    univeristyLocation="Rochester, New York" courseDetails="Master of Scieces in Computer Science"
                    univeristyDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
                    <Education startYear="2013" endYear="2017" universityName="Univeristy of Mumbai"
                    univeristyLocation="Mumbai, India" courseDetails="Bachelor of Engineering in Information Technology"
                    univeristyDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
                    <h2 style={{color:"#ecf0f1"}}>Experience</h2>
                    <hr/>
                    <Experience startMonth ="Jan" startYear="2019" endMonth="Aug" endYear="2019" companyName="Paychex Inc."
                    companyLocation="Rochester, New York" title="Software Developer Intern"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
                    <Experience startMonth ="June" startYear="2017" endMonth="July" endYear="2017" 
                    companyName="KSM Marine Logistics Pvt. Ltd." companyLocation="Mumbai, India" title="Web Developer Intern"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
                </Cell>
            </Grid>
        );
    }
}

export default Resume;