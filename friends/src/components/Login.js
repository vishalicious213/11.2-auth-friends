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
                // console.log('Results: ', results.data.payload);
                localStorage.setItem('token', results.data.payload);
                // console.log('From Login: ', localStorage.getItem('token'));
                // window.history.push('/friendslist');
                props.history.push('/friendslist');
            })
            .catch(error => {
                console.log('Login error: ', error);
                setUsername('');
                setPassword('');
            })
        // go to friends list or login again
    }

    return (
        <section className='login-page'>
            <div className='login-left'>
                <img className='logo' src={require(`./../img/friends-cover.jpg`)} alt='Friends cast'></img>
            </div>

            <div className='login-right'>
                <div className='logo-box'>
                    <img className='logo' src={require(`./../img/friends-logo-800.png`)} alt='Friends logo'></img>
                </div>

                <form className='login-form' onSubmit={submitLogin}>
                    <input className='login-input' type='text' name='username' placeholder='Username' value={username} onChange={updateUsername} />
                    <input className='login-input' type='password' name='password' placeholder='Password' value={password} onChange={updatePassword} />
                    <button className='login-input'>Login</button>
                </form>

                <div className='get'>
                    <a className='store' href='https://www.apple.com/ios/app-store/'>
                        <img className='app-store' src={require(`./../img/app-store.png`)} alt='Apple App Store'></img>
                    </a>
                    <a className='store' href='https://play.google.com/store?hl=en'>
                        <img className='app-store' src={require(`./../img/google-play.png`)} alt='Google Play'></img>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Login;