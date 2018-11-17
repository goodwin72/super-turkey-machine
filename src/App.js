import React, { Component } from 'react';
import '../styles/App.css';
import Hero from './Hero'
import PRCalculator from './PRCalculator'
import Footer from './Footer'

class App extends Component {
  render() {
    //const a = [1,3,5];
    //console.log(...a);
    return (
      <div className="App">
        <Hero 
          header="Super Turkey Machine" 
          description="Power rankings calculator for Smash Bros at WSU"
        >
          <PRCalculator/>
        </Hero>
        
        <section id="about" className="note">
          <div className="container">
            <h2>How is the PR calculated?</h2>
            <p>REMEMBER TO CALCULATE WEEKLIES</p>
          </div>
        </section>

        <section id="formatting" className="note">
          <div className="container">
            <h2>How should my CSV file be formatted?</h2>
            <p>Description here.</p>
          </div>
        </section>

        <Footer/>
      </div>
    );
  }
}

export default App;
