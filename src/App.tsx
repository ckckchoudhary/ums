import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Provider } from 'react-redux';
import { appStore } from './reducer';
import UserList from './Containers/UserList';
import AddUser from './Containers/AddUser';
import EditUser from './Containers/EditUser';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Router>
          <Routes>
            <Route path="/user/add" element={<AddUser />}></Route>
            <Route path="/user/:userId" element={<EditUser />}></Route>
            <Route path="/" element={<UserList />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
