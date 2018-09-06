import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './js/Login';
import Content from './js/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    }
  }
  componentDidMount() {
    this.authListener();
  }
  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }
  authListener() {
    //comprueba que esté logueado
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        {this.state.isLoggedIn ?
          (<Content body={children} ></Content>) : (<Login></Login>)}
      </div>

    );
  }
}

export default App;
