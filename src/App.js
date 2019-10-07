import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MainContent from './components/MainContent/MainContent'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* <div className="wrapper"> */}
        <MainContent />
        {/* </div> */}
      </Router>      
    )
  }
}

export default App;
