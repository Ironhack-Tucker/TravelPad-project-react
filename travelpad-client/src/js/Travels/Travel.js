import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Travel.css'
import { Redirect } from 'react-router';
import TravelDetail from './Travel-detail';

class Travel extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    openTravel = () => {
        this.setState({ redirect: true });
        console.log("selected librito: ", this.props.index);
    }

    render() {

        if (this.state.redirect) {
            // return <Redirect push to={"/pad:" + this.props.i } />;
            return <Redirect to={"/pad:" + this.props.index} t={this.props.index} />
        }

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

export default Travel;
