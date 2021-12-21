// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Userlist from './Userlist';
import Usercreate from './Usercreate';
import Useredit from './Useredit';
import Userdelete from './Userdelete';
import Productlist from './Productlist';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div className="container-fluid">
            <Routes>
              <Route exact path="/" element={<Dashboard />}></Route>
              <Route exact path="/userlist" element={<Userlist />}></Route>
              <Route exact path="/user-create" element={<Usercreate />}></Route>
              <Route exact path="/user-edit/:id" element={<Useredit />}></Route>
              <Route exact path="/user-delete/:id" element={<Userdelete />}></Route>
              <Route exact path="/productlist" element={<Productlist />}></Route>
            </Routes>
            {/* <Dashboard />
            <Userlist />
            <Productlist /> */}
               
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
