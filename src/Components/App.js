import '../Styles/App.css';
import React from 'react';
import Nav from './Navbar';
import Menu from './Menu';
import Images from './Image';
import List from './List';
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav /> 
      <Menu />
      <Images />
      <List />
      <Footer />
    </div>
  );
}

export default App;
