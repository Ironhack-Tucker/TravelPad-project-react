import React, { Component } from 'react';

import '../../styles/Travels-page.css'
import Travel from './Travel';
import { mine } from '../../data/mine.json';
import TravelDetail from './Travel-detail';
class TravelsPg extends Component {
    constructor() {
        //hereda todas las funcionalidades de react
        super();
        //estado de los datos en la app
        this.state = {
            mine,
            openDetail: false
        };

    }
    openTravel = () => {
        this.setState({ redirect: true, openDetail: true });
        console.log("selected librito: ", this.props.index);
    }
    componentWillMount() {

    }


    render() {
        // if (!this.state.openDetail) {

            const travels = this.state.mine.map((myTravel) => {

                return (<Travel openTravel={this.openTravel} index={myTravel.id} travelUser={myTravel.user} travelDescription={myTravel.description}
                    travelDate={myTravel.date} travelLocation={myTravel.location}></Travel>)
            });
            return (
                <div className="row">

                    <div className="col-md-9">
                        <div className="row">

                            {travels}

                        </div>
                    </div>

                </div>

            );
        // } else {
        //     return (
            
        //             <TravelDetail></TravelDetail>

        //     )
        // }
    }
}

export default TravelsPg;