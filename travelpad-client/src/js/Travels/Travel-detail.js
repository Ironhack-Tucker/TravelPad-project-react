import React, { Component } from 'react';
import '../../styles/Travel-detail.css';
import Travel from './Travel';
import { Redirect } from 'react-router';

class TravelDetail extends Component {

    render() {

   
        return (
            <div>
                <div className="content">
                    <div id="col-trave-detail" className="col-sm-5">
                        <div id="travel-detail-card" className="card">
                            <div className="card-header">
                                <div className="corner-div">

                                </div>

                                <h2>Autor</h2>
                            </div>
                            <div className="card-body">
                                <p>Descripcion breve del viaje</p>
                                <p>Fecha</p>

                            </div>
                            <div className="card-footer">
                                <h4>Lugar</h4>
                            </div>
                        </div>
                    </div>


                </div>

            </div>



        );
    }
}

export default TravelDetail;
