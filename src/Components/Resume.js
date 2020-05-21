import React from 'react';
import Education from './Education';
import Experience from './Experience';
import About from './About';
import {Grid, Cell} from 'react-mdl';
import resume from '../assets/misc/Rohit_Keswani_Resume.pdf';


class Resume extends React.Component{
    render(){
        return(
            <Grid style={{backgroundColor:"#ecf0f1"}}>
                <Cell className="resume-left" col={4}>
                    <h3 style={{color:"#2c3e50"}}> About me</h3>
                    <p><a href={resume} rel="noopener noreferrer" class="link" target="_blank">Click here to see my Resume</a></p>
                    <About></About>
                </Cell>
                <Cell className="resume-right" col={8}>
                    <h3 style={{color:"#2c3e50"}}>Education</h3>
                    <hr/>
                    <Education startMonth="Aug" startYear="2017" endMonth="May" endYear="2020" universityName="Rochester Institute of Technology"
                    univeristyLocation="Rochester, New York" courseDetails="Master of Science in Computer Science"
                    univeristyDescription="Courses: Foundation of Algorithms, Data Structures, Object Oriented Programming, Distributed Systems,
                    Foundation of Networks, Big Data Analytics, Foundation of Computer Vision."/>
                    <Education startMonth="Aug" startYear="2013" endMonth="May" endYear="2017" universityName="Univeristy of Mumbai"
                    univeristyLocation="Mumbai, India" courseDetails="Bachelor of Engineering in Information Technology"
                    univeristyDescription="Courses: Data Structure and Algorithm Analysis, Database Management Systems, Cloud Computing, Web
                    programming, Operating Systems, Systems and Web Security."/>
                    <h3 style={{color:"#2c3e50"}}>Experience</h3>
                    <hr/>
                    <Experience startMonth ="Jan" startYear="2019" endMonth="Aug" endYear="2019" companyName="Paychex Inc."
                    companyLocation="Rochester, New York" title="Software Developer Intern"
                    jobDescription="Worked in a team of 5 to develop automated quality gating application by checking the
                    statistics of Paychex applications with help of REST endpoints. Developed a micro-service using Apache kafka to perform 
                    aynchronous updates to Oracle database. Created Gradle plugin, performed routine automation with shell scripting and conguration management
                    for jenkins agents with Puppet." techUsed="Technologies: Java, Springboot, Gradle, SQL, Apache Kafka, Docker(Openshift), Jenkins, XLDeploy."/>
                    <Experience startMonth ="June" startYear="2017" endMonth="July" endYear="2017" 
                    companyName="KSM Marine Logistics Pvt. Ltd." companyLocation="Mumbai, India" title="Web Developer Intern"
                    jobDescription="Developed a web application web application for shipping and logistics company. Utilized google maps api keys for providing directions and redirected inquiry
                    form details from website to email id. Provided shipping details to clients with help of API's leading to reduction in calls for shipment status."
                    techUsed="Technologies: HTML, CSS, Bootstrap Framework, PHP, API."/>
                </Cell>
            </Grid>
        );
    }
}

export default Resume;