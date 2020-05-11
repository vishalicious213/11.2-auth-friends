import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Route exact path='/' component={Login} />
      <PrivateRoute path='/friendslist' component={FriendsList} />
      <PrivateRoute path='/addfriend' component={AddFriend} />
    </div>
  );
}

export default App;

// SITEMAP
// login/homepage                         [POST]
// friends list (on login)                [GET]
// individual friend (from friends list)  [GET]
    // update function                    [PUT]
    // delete function                    [DELETE]
// new friend (from friends list)         [POST]