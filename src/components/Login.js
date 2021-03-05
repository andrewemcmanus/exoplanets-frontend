// Imports
import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

// import keys from '../utils/credentials';
// const { REACT_APP_SERVER_URL } = keys;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function getCookie(name) {
    const jQuery = require('jquery');
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password };
        const csrftoken = getCookie('csrftoken');
        const headers = new Headers();
        headers.append('X-CSRFToken', csrftoken);
        console.log(headers);
        axios.post(`${REACT_APP_SERVER_URL}/api/login/`, userData, { headers: headers })
        .then(response => {
            console.log(response);
            setRedirect(true);
        })
        .catch(error =>{
            console.log(error);
            alert('Either email or password is incorrect. Please try again.');
        });
    }

    if (props.user) return <Redirect to='/profile' />

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
