import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState();

    const getFriends = () => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(results => {
                // console.log('axiosWithAuth: ', results.data);
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
        <section className='friendslist'>
        {(friends ? 
            friends.map(friend => (
                <div className='friend' key={friend.id}>
                    <h3 className='details'>{friend.name}</h3>
                    <p className='details'>Age: {friend.age}</p>
                    <p className='details'>Email: {friend.email}</p>
                </div>
            )) : null)}
        </section>
    )
}

export default FriendsList;