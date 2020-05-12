import React from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state ={activeTab : 0};
    }

    toggleCategories(){
        const linkToPicture ="https://mail.google.com/mail/?tab=im&authuser=0";
        if(this.state.activeTab===0){
            return(
                <Card shadow={0} style={{width: "100%", height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: 'black', background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7UcwGee7bbvIScKKORhc80yebgxL4YXgVD-Cs3aUxqilJDvM8&usqp=CAU") bottom right 15% no-repeat #46B6AC'}}>To-Do List</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
            )
        } else if(this.state.activeTab===1){
            return(
                <div>
                    <h1>This is Software Dev</h1>
                </div>
            )
        } else if(this.state.activeTab===2){
            return(
                <div>
                    <h1>
                        This is Database
                    </h1>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="cateogory-tabs">
                <Tabs activeTab ={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>Web Development</Tab>
                    <Tab>Software Development</Tab>
                    <Tab>Database</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="grids-of-projects">
                        <Cell col={3} className="each-project">
                            {this.toggleCategories()}
                        </Cell>
                        <Cell col={3} className="each-project">
                            {this.toggleCategories()}
                        </Cell>
                        <Cell col={3} className="each-project">
                            {this.toggleCategories()}
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}
export default Projects;