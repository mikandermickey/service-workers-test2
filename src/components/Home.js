import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Demo from './Demo';
import PWAPrompt from 'react-ios-pwa-prompt'

const Home = () => {
    return ( 
         <div className="App">
         <Demo/>
         <PWAPrompt promptOnVisit={1} timesToShow={3} copyClosePrompt="Close" permanentlyHideOnDismiss={false}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hva så lars</p>
      </header>
      
    </div>
     );
}
 
export default Home;