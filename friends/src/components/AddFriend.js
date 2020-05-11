import React, { useState } from 'react';
import axiosWithAuth from '../axiosWithAuth';

const AddFriend = (props) => {
    const [friendName, setFriendName] = useState('');
    const [friendAge, setFriendAge] = useState(0);      // if this isn't initialized, its "uncontrolled" and returns a warning
    const [friendEmail, setFriendEmail] = useState('');

    const updateFriendName = event => {
        setFriendName(event.target.value);
    }
    
    const updateFriendAge = event => {
        setFriendAge(event.target.value);
    }

    const updateFriendEmail = event => {
        setFriendEmail(event.target.value);
    }

    const submitFriend = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', { name: friendName, age: friendAge, email: friendEmail })
            .then(results => {
                // console.log('Add Friend: ', results);
                props.history.push('/friendslist');
            })
            .catch(error => {
                console.log('Login error: ', error);
            })
    }

    return (
        <section className='add-friend'>
            <form className='add-friend-form' onSubmit={submitFriend}>
                <h3 className='add-friend-text new-friend-heading'>Add New Friend</h3>
                <input className='login-input' type='text' name='friendName' placeholder="Friend's Name" value={friendName} onChange={updateFriendName} />
                <div className='add-friend-text age-container'>
                    <span>Age: </span>
                    <input className='login-input age' type='number' name='friendAge' placeholder='Age' value={friendAge} onChange={updateFriendAge} />
                </div>
                <input className='login-input' type='text' name='friendEmail' placeholder="Friend's Email" value={friendEmail} onChange={updateFriendEmail} />
                <button className='login-input' >Add Friend</button>
            </form>
        </section>
    )
}

export default AddFriend;