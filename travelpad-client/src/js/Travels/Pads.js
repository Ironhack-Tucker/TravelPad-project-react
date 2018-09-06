import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Pads.css'
import { Redirect } from 'react-router';

class Pads extends Component {


    render() {


        return (
            <div className="col-md-4" key={this.props.index}>
                <div className="card mt-4" >

                    <div className="card-header">
                        <h5>{this.props.travelUser}</h5>
                    </div>

                    <div className="card-body" onClick={this.openTravel}>
                        <p>{this.props.travelDescription}</p>
                        <p>{this.props.travelDate}</p>

                    </div>
                    <div className="card-footer">
                        <p>{this.props.travelLocation}</p>

                    </div>



                </div>
            </div>



        );
    }
}

export default Pads;
