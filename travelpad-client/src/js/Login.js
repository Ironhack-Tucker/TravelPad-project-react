import React, { Component } from 'react';
import '../styles/Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            showLogin: true,
            showRegister: false,
            email: '',
            password: '',
            name: '',
            repeatPassword: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onLoginClicked(e){
        e.preventDefault();
    }
    loginWithFacebook() {

    }
    loginWithGoogle() {

    }
    loginWithTwitter() {

    }
    screenOperations() {
        if (this.state.showLogin) {
            this.setState({
                showLogin: false,
                showRegister: true,

            })
        } else {
            if (window.confirm('sure?')) {
                this.setState({
                    showLogin: true,
                    showRegister: false,

                })

            }

        }

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
                                    <form className="form-container" onSubmit={this.onLoginClicked}>
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
                                    <a onClick={() => this.screenOperations()}>Don't have an acount?</a>

                                </div>

                            </div>
                            : <div className="col-sm-4 screen1">
                                <div className="first-block">

                                    <h3>Registro</h3>
                                    <form className="form-container" onSubmit={this.handleChange}>
                                        <div className="form-group">
                                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.name} onChange={this.handleChange} type="text" name="name" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="inputPassword" aria-describedby="passHelp" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.repeatPassword} onChange={this.handleChange} type="password" name="password" className="form-control" id="inputRepeatPassword" aria-describedby="repeatPasswordHelp" placeholder="Repeat password" />
                                        </div>
                                        <button id="btn-register" className="btn" type="submit" onClick={this.onLoginClicked}>Register</button>
                                    </form>

                                </div>

                                <div className="btn-to-login">
                                    <a onClick={() => this.screenOperations()}>Already have an acount?</a>

                                </div>

                            </div>
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
