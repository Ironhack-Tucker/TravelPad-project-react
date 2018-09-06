import React, { Component } from 'react';
import '../styles/Search.css';
import Travel from './Travels/Travel';
import { travels } from '../data/travels.json';
class Search extends Component {
    constructor(props) {
        //hereda todas las funcionalidades de react
        super(props);
        //estado de los datos en la app
        this.state = {
            travels,
           
        };

    }


    getTravel(id) {
        return travels.slice(0).find(t => t.id = id);
    }

    render() {
        const travels = this.state.travels.map((travel) => {


            return (<Travel index={travel.id} travelUser={travel.user} travelDescription={travel.description}
                travelDate={travel.date} travelLocation={travel.location}></Travel>)
        });
        return (

            <div className="container">


                <div className="buttons">
                    <button className="btn" >Filter</button>
                    <button className="btn" >Filter</button>
                    <button className="btn" >Filter</button>

                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {travels}

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default Search;
