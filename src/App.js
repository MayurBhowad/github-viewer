import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

//Redux
import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store.redux';
import store from './redux/store.redux'
import { PersistGate } from 'redux-persist/integration/react';


import Search from './components/Search.component';
import Home from './components/Home.component';
import UserHome from './components/user/UserHome.component';
import axios from 'axios';


function App(props) {
  const [serachString, setSerachString] = useState('random');
  const [user, setUser] = useState();
  let userGithub = [];

  const searchByString = async (e, string) => {
    e.preventDefault();

  }




  /*
  https://api.github.com/users/mayurbhowad
  https://api.github.com/users/'+username+'/repos
  https://api.github.com/users/mayurbhowad/starred
   */


  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
        <div className="App">
          <Route exact path="/" >
            <Search searchByString={searchByString} />
            <Home />
          </Route>
          <Route exact path='/user'>
            <UserHome user={user} />
          </Route>


        </div>
      </Router>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
