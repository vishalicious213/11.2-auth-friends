import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState();

    const getFriends = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(results => {
                console.log('axiosWithAuth: ', results.data);
                setFriends(results.data, console.log('setFriends: ', friends));
            })
            .catch(error => {
                console.log('Error: ', error);
            });
    }

    useEffect(() => {
        getFriends();
    }, []);

    return (
        // console.log('in return: ', friends),
        (friends ? 
            friends.map(friend => (
                <h3>{friend.name}</h3>
            )) : null)
        // <section className='friendslist'>
            // <div>Friends List</div>
        // </section>
    )
}

export default FriendsList;