import React from 'react';
import {Grid, Cell, Card, Tabs, Tab, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import capstonereport from '../assets/misc/CapstoneReport.pdf'
import airlineperformancereport from '../assets/misc/AirlineOnTimePerformance.pdf'

class Projects extends React.Component{
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <Grid>
                    <Cell col={4}>
                    <Card shadow={5} style={{width:"100%",margin:'auto'}}>
                            <CardTitle className="project-title-bg">
                                <span className="project-title">Go Travel (in progress)</span>
                            </CardTitle>
                            <CardText>
                            Developing a web application to buy travel packages. Implementing CRUD functionality with the database to store payment and order details, with User authentication and payment gateway integration. 
                            </CardText>
                            <CardActions>
                                <Button colored><a href="https://github.com/RohitKeswani/gotravel" rel="noopener noreferrer" class="link" target="_blank">GitHub</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{width:"100%", margin:'auto'}}>
                            <CardTitle className="project-title-bg">
                                <span className="project-title">Do it Today !</span>
                            </CardTitle>
                            <CardText>
                            This app lets you create a list of tasks that you would like to do today. It enables to enhance productivity. 
                            It lets you add the tasks, delete the tasks when they are completed and edit tasks if you would like.
                            </CardText>
                            <CardActions>
                                <Button colored><a href="https://github.com/RohitKeswani/todolist" rel="noopener noreferrer" class="link" target="_blank">GitHub</a></Button>
                                <Button colored><a href="https://rohitkeswani.github.io/todolist/" rel="noopener noreferrer" class="link" target="_blank">LiveDemo</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            )
        }
        else if(this.state.activeTab===1){
            return(
                <Grid>
                    <Cell col={4}>
                        <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                            <CardTitle className="project-title-bg">
                                <span className="project-title">Publisher/Subcriber System</span>
                            </CardTitle>
                            <CardText>
                            Developed a messaging queue with Publisher Subscriber system to resemble a blogging environment. 
                            Used Socket programming for communication, performed JUnit Testing and deployed on docker containers.
                            </CardText>
                            <CardActions>
                                <Button colored><a href="https://github.com/RohitKeswani/PubSubSystem" rel="noopener noreferrer" class="link" target="_blank">GitHub</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                            <CardTitle className="project-title-bg">
                                <span className="project-title">Distributed File Retrieval System</span>
                            </CardTitle>
                            <CardText>
                            Developed a peer-to-peer system to push and fetch les from over the private network using Distributed Hash Tables. Implemneted using RMI concepts and deployed the project on local docker containers.
                            </CardText>
                            <CardActions>
                                <Button colored><a href="https://gitlab.com/rk5075/ChordDHT" rel="noopener noreferrer" class="link" target="_blank">GitHub</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                            <CardTitle className="project-title-bg">
                                <span className="project-title">WireBug : Your own Wireshark</span>
                            </CardTitle>
                            <CardText>
                            Developed a program to analyze network packets from Wireshark. Retrieved information from the packets such as protocol used, sender and receiver IP address, MAC addresses and payload information. 
                            </CardText>
                            <CardActions>
                                <Button colored><a href="https://gitlab.com/rk5075/PacketAnalyzer" rel="noopener noreferrer" class="link" target="_blank">GitHub</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            )
        }
        else if(this.state.activeTab===2){
            return(
                <Grid>
                    <Cell col={4}>
                        <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                            <CardTitle className="project-title-bg">
                                <span className="project-title">TouchStone: Benchmark Framework For TensorFlow</span>
                            </CardTitle>
                            <CardText>
                            A Distributed Framework for TensorFlow Benchmarking to fetch performance statistics of TensorFlow models and 
                            perform workload distribution leading to better resource utilization and reduced run time. 
                            </CardText>
                            <CardActions>
                                <Button colored><a href={capstonereport} rel="noopener noreferrer" class="link" target="_blank">Report</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                            <CardTitle className="project-title-bg">
                                <span className="project-title">Airline on-time Performance statistics</span>
                            </CardTitle>
                            <CardText>
                            Collected airline data, pre-processed and prepared it for analysis. Performed Logistic Regression, K-NN 
                            Classifier and Decision Tree algorithms to predict and classify the performance of airlines.
                            </CardText>
                            <CardActions>
                                <Button colored><a href="https://github.com/RohitKeswani/AirlineOnTimerPerformance" rel="noopener noreferrer" class="link" target="_blank">GitHub</a></Button>
                                <Button colored><a href={airlineperformancereport} rel="noopener noreferrer" class="link" target="_blank">Report</a></Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            )
        }
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>MERN Stack</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                </Tabs>
                <section>
                    <div className="each-project">{this.toggleCategories()}</div>
                </section>
            </div>    
        );
    }
}
export default Projects;