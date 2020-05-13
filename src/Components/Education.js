import React from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends React.Component{
    render(){
        return(
            <div className="education">
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear}-{this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop:"0px"}}>{this.props.universityName}</h4>
                        <p>{this.props.courseDetails}<br/>{this.props.univeristyLocation}</p>
                        <p>{this.props.univeristyDescription}</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Education;