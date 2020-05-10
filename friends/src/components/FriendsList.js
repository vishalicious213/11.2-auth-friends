import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';
// import axios from 'axios';

const FriendsList = () => {
    const [friends, setFriends] = useState();

    useEffect(() => {
        // axios
        // .get('http://localhost:5000/api/friends', {headers: {Authorization: localStorage.getItem('token')}})
        console.log('From FriendsList: ', localStorage.getItem('token'));
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(results => {
                console.log(results.data);
                setFriends(results.data);
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    },[]);

    return (
        <div>Friends List</div>
    )
}

export default FriendsList;