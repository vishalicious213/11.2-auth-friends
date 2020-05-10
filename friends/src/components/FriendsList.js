import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';
// import axios from 'axios';

const FriendsList = () => {
    const [friends, setFriends] = useState();

    useEffect(() => {
        // axios
        // .get('http://localhost:5000/api/friends', {headers: {Authorization: localStorage.getItem('token')}})
        // console.log('From FriendsList: ', localStorage.getItem('token'));
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(results => console.log('API: ', results.data))
            .then(results => setFriends(results.data))
            .then(console.log('FriendsList: ', friends))
            // .then(results => {
            //     console.log(results.data);
            //     setFriends(results.data);
            //     console.log('FriendsList: ', friends)
            // })
            .catch(error => {
                console.log('Error: ', error);
            });
    },[friends]);

    return (
        // friends.map(friend => (
        //     <h3>friend.name</h3>
        // ))
        // <section className='friendslist'>
            <div>Friends List</div>
        // </section>
    )
}

export default FriendsList;