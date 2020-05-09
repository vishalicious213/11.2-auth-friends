import React from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
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