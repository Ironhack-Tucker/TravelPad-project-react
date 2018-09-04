import React, { Component } from 'react';
import '../styles/Content.css';
import Navigation from './Navigation';
import { PropTypes } from 'prop-types';
import items from '../data/menu';

class Content extends Component {

    static propTypes = {
        body: PropTypes.object.isRequired
    };
    render() {
        const { body } = this.props;

        return (
            <div className="Cont">
                <div className="container">
                    <div className="content">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1><a href="/">Travel Pad</a></h1>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn"><i className="fas fa-sign-out-alt"></i></button>
                            </div>

                        </div>
                        <Navigation items={items}></Navigation>
                        {body}
                    </div>
                </div>


            </div>




        );
    }
}

export default Content;
