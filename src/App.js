import React from 'react';
import Navbar from './components/Navbar/Navbar'
import MainContent from './components/MainContent/MainContent'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="wrapper">
          <MainContent />
        </div>

      </React.Fragment>
    )
  }
}

export default App;
