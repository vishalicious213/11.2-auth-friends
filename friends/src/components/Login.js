import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const updateUsername = event => {
        setUsername(event.target.value);
    }
    
    const updatePassword = event => {
        setPassword(event.target.value);
    }

    const submitLogin = event => {
        event.preventDefault();
        // console.log(username, password);
        axios
            .post('http://localhost:5000/api/login', { username, password })
            .then(results => {
                console.log('Results: ', results.data);
                localStorage.setItem('token', results.data.token);
                // window.history.push('/friendslist');
                props.history.push('/friendslist');
            })
            .catch(error => console.log('Login error: ', error));
        // go to friends list or login again
    }

    return (
        <section className='login-page'>
            <div>Login</div>
            <form onSubmit={submitLogin}>
                <input type='text' name='username' placeholder='Username' value={username} onChange={updateUsername} />
                <input type='password' name='password' placeholder='Password' value={password} onChange={updatePassword} />
                <button>Login</button>
            </form>
        </section>
    )
}

export default Login;