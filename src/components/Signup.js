// Imports
import React, { useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
// import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

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


const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    // const CSRFToken = () => {
    //     return (
    //         <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    //     );
    // };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const csrftoken = getCookie('csrftoken');
        const headers = new Headers();
        headers.append('X-CSRFToken', csrftoken);
        // const token = CSRFToken();
        // console.log(csrftoken);
        if (password === confirmPassword && password.length >= 8) {
            const newUser = { username, email, password };
            // console.log(newUser);
            axios.post(`${REACT_APP_SERVER_URL}/api/user/`, newUser, { headers: headers }
            ).then(response => {
              // console.log(response);
                setRedirect(true);
            })
            .catch(error => {
                // console.log(newUser);
                console.log(error);
            })
        } else {
            if (password !== confirmPassword) {
                alert('Passwords do not match.')
            } else {
                alert('Password must be at least 8 characters')
            }
          }
        };

    if (redirect) return <Redirect to='/login' />
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input type="text" name="username" value={username} onChange={handleUsername} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
