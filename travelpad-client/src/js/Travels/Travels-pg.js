import React, { Component } from 'react';

import '../../styles/Travels-page.css'
import Travel from './Travel';
import { mine } from '../../data/mine.json';
class TravelsPg extends Component {
    constructor() {
        //hereda todas las funcionalidades de react
        super();
        //estado de los datos en la app
        this.state = {
            mine,

        };

    }

    componentWillMount() {

    }
    // getTravel() {
    //     return this.state.modalTravel;
    // }
    render() {

        const travels = this.state.mine.map((myTravel) => {

            return (<Travel index={myTravel.id} travelUser={myTravel.user} travelDescription={myTravel.description}
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
    }
}

export default TravelsPg;
