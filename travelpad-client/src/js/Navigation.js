import React, { Component } from 'react';
import '../styles/Navigation.css';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Navigation extends Component {

    static propTypes = {
       
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

    }

    exitApp() {
        console.log("Exit..");
    }

    componentWillMount() {


    }
    render() {

        const { items } = this.props;

        return (


            <nav className="navbar navbar-expand-lg" >
                <ul className="navbar-nav">
                    {
                        items && items.map(
                            (item, key) =>
                                <li key={key}>
                                    <Link to={item.url}>{item.title}</Link>

                                </li>
                        )
                    }
                </ul>
                <hr></hr>


            </nav>




        );
    }

}
export default Navigation;
