import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Route exact path='/' component={Login} />
      <Route path='/friendslist' component={FriendsList} />
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