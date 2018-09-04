import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Travel.css'
class Travel extends Component {
    render() {
        return (
            <div className="col-md-4" key={this.props.i}>
                <div className="card mt-4" >

                    <div className="card-header">
                        <h5>{this.props.travelUser}</h5>
                    </div>
                    <div className="card-body">
                        <Link to="/pad-pg"></Link>
                        <p>{this.props.travelDescription}</p>
                        <p>{this.props.travelLocation}</p>
                    </div>
                    <div className="card-footer">
                        <p>{this.props.travelDate}</p>

                    </div>



                </div>
            </div>



        );
    }
}

export default Travel;
