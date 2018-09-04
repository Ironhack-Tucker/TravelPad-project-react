import React, { Component } from 'react';
import '../../styles/Travels-page.css'
import Travel from './Travel';
import { travels } from '../../data/travels.json';
class TravelsPg extends Component {
    constructor() {
        //hereda todas las funcionalidades de react
        super();
        //estado de los datos en la app
        this.state = {
            travels
        };

    }
    render() {
        const travels = this.state.travels.map((travel, i) => {


            return (<Travel i={i} travelUser={travel.user} travelDescription={travel.description}
                travelDate={travel.date} travelLocation={travel.location}></Travel>)
        });
        console.log("travels: ", this.state.travels);
        return (
            <div id="task-row" className="row">
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
