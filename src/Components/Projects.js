import React from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends React.Component{
    toggleCategories(projname){
        if(projname==="todolist"){
            return(
                <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                    <CardTitle className="project-title-bg" style={{color: '#fff', opacity:'0.8'}}>
                        <span className="project-title">Do it Today !</span>
                    </CardTitle>
                    <CardText>
                    This app lets you create a list of tasks that you would like to do. It enhances productivity. 
                    It lets you add the tasks, delete the tasks when they are completed and edit tasks if you would like.
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                </Card>
            )    
        }
        else if(projname==="touchstone"){
            return(
                <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                    <CardTitle className="project-title-bg" style={{color: '#fff', opacity:'0.8'}}>
                        <span className="project-title">TouchStone: Benchmark Framework For TensorFlow</span>
                    </CardTitle>
                    <CardText>
                    A Distributed Framework for TensorFlow Benchmarking to fetch performance statistics of TensorFlow models and 
                    perform workload distribution leading to better resource utilization and reduced run time. 
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                </Card>
            )    
        }
        else if (projname==="pubsub"){
            return(
                <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                    <CardTitle className="project-title-bg" style={{color: '#fff', opacity:'0.8'}}>
                        <span className="project-title">Publisher/Subcriber System</span>
                    </CardTitle>
                    <CardText>
                    A Distributed Framework for TensorFlow Benchmarking to fetch performance statistics of TensorFlow models and 
                    perform workload distribution leading to better resource utilization and reduced run time. 
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                </Card>
            )
        }
        else if(projname==="gotravel"){
            return(
                <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                    <CardTitle className="project-title-bg" style={{color: '#fff', opacity:'0.8'}}>
                        <span className="project-title">Go Travel</span>
                    </CardTitle>
                    <CardText>
                    A Distributed Framework for TensorFlow Benchmarking to fetch performance statistics of TensorFlow models and 
                    perform workload distribution leading to better resource utilization and reduced run time. 
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                </Card>
            )
        }
        else if(projname==="dfrs"){
            return(
                <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                    <CardTitle className="project-title-bg" style={{color: '#fff', opacity:'0.8'}}>
                        <span className="project-title">Distributed File Retrieval System</span>
                    </CardTitle>
                    <CardText>
                    A Distributed Framework for TensorFlow Benchmarking to fetch performance statistics of TensorFlow models and 
                    perform workload distribution leading to better resource utilization and reduced run time. 
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                </Card>
            )
        }
        else if(projname ==="wirebug"){
            return(
                <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                    <CardTitle className="project-title-bg" style={{color: '#fff', opacity:'0.8'}}>
                        <span className="project-title">WireBug : Your own Wireshark</span>
                    </CardTitle>
                    <CardText>
                    A Distributed Framework for TensorFlow Benchmarking to fetch performance statistics of TensorFlow models and 
                    perform workload distribution leading to better resource utilization and reduced run time. 
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                </Card>
            )
        }
        else if(projname==="airline"){
            return(
                <Card shadow={5} style={{width: '100%', margin:'auto'}}>
                    <CardTitle className="project-title-bg" style={{color: '#fff', opacity:'0.8'}}>
                        <span className="project-title">Airline on-time Performance statistics</span>
                    </CardTitle>
                    <CardText>
                    A Distributed Framework for TensorFlow Benchmarking to fetch performance statistics of TensorFlow models and 
                    perform workload distribution leading to better resource utilization and reduced run time. 
                    </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                </Card>
            )
        }
    }

    render(){
        return(
            <div>
                <Grid>
                    <Cell col={3} className="each-project">
                        {this.toggleCategories("todolist")}
                    </Cell>
                    <Cell col={3} className="each-project">
                        {this.toggleCategories("touchstone")}
                    </Cell>
                    <Cell col={3} className="each-project">
                        {this.toggleCategories("pubsub")}
                    </Cell>
                    <Cell col={3} className="each-project">
                        {this.toggleCategories("gotravel")}
                    </Cell>
                </Grid>
                <Grid>
                    <Cell col={3} className="each-project">
                        {this.toggleCategories("dfrs")}
                    </Cell>
                    <Cell col={3} className="each-project">
                        {this.toggleCategories("wirebug")}
                    </Cell>
                    <Cell col={3} className="each-project">
                        {this.toggleCategories("airline")}
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Projects;