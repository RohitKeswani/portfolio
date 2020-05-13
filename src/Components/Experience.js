import React from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends React.Component{
    render(){
        return(
            <div className="experience">
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{margin:"auto"}}>{this.props.companyName}</h4>
                        <p>{this.props.title}<br/>{this.props.companyLocation}</p>
                        <p style={{fontWeight:"bold"}}>{this.props.techUsed}</p>
                        <p>{this.props.jobDescription}</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Experience;