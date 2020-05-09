import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const updateName = event => {
        setName(event.target.value);
    }
    
    const updatePassword = event => {
        setPassword(event.target.value);
    }

    const submitLogin = event => {
        event.preventDefault();
        // go to friends list or login again
    }

    return (
        <section className='login-page'>
            <div>Login</div>
            <form onSubmit={submitLogin}>
                <input type='text' name='name' placeholder='Username' value={name} onChange={updateName} />
                <input type='password' name='password' placeholder='Password' value={password} onChange={updatePassword} />
                <button>Login</button>
            </form>
        </section>
    )
}

export default Login;