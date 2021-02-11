import '../Styles/App.css';
import React from 'react';
import Nav from './Navbar';
import Menu from './Menu';
import Image from './Image';
import List from './List';
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav /> 
      <Menu />
      <Image />
      <List />
      <Footer />
    </div>
  );
}

export default App;
