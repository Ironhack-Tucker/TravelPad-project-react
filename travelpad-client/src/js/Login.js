import React, { Component } from 'react';
import '../styles/Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            showLogin: true,
            showRegister: false,
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    loginWithFacebook() {

    }
    loginWithGoogle() {

    }
    loginWithTwitter() {

    }
    render() {

        return (
            <div className="Login">
                <div className="col-sm-12  top">
                <h1 className="title">Travel Pad</h1>

                </div>
                <div className="container">
                    <div className="content">
                        {this.state.showLogin ?
                            <div className="col-sm-4 screen1">
                                <div className="first-block">

                                    <h3>Login</h3>
                                    <form className="form-container" onSubmit={this.handleChange}>
                                        <div className="form-group">
                                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="email" />
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="inputPassword" aria-describedby="passHelp" placeholder="Password" />
                                        </div>
                                        <button id="btn-login" className="btn" type="submit" onClick={this.onLoginClicked}><i className="fas fa-sign-in-alt"></i></button>
                                    </form>
                                    <div className="second-block">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <button onClick={this.loginWithFacebook} id="btn-facebook" className="btn"><i className="fab fa-facebook-f"></i> Facebook</button>
                                            </div>
                                            <div className="col-sm-4">
                                                <button onClick={this.loginWithTwitter} id="btn-twitter" className="btn"><i className="fab fa-twitter"></i> Twitter</button>

                                            </div>
                                            <div className="col-sm-4">
                                                <button onClick={this.loginWithGoogle} id="btn-google" className="btn"><i className="fab fa-google"></i> Google</button>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div className="btn-to-register">
                                    <a>Don't have an acount?</a>

                                </div>

                            </div>
                            : null
                        }
                        {this.state.showRegister ?
                            <div className="screen2">
                            </div>
                            : null
                        }
                    </div>
                </div>

            </div>

        );
    }
}

export default Login;
