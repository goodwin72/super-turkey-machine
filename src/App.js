import React, { Component } from 'react';
import '../styles/App.css';
import Hero from './Hero'
import PRCalculator from './PRCalculator'
import Footer from './Footer'

class App extends Component {
  componentDidMount(){
    document.title = "Super Turkey Machine | PR Calculator for Smash Bros at WSU"
  }
  
  render() {
    return (
      <div className="App">
        <Hero 
          header="Super Turkey Machine" 
          description="Power rankings calculator for Smash Bros at WSU"
        >
          <PRCalculator/>
        </Hero>

        <section id="formatting" className="note">
          <div className="container">

            <div className="note__text">
              <header>
                <h2>How should my .CSV file be formatted?</h2>
              </header>
              <p>On the first row, starting from the second column, list the names of all the players who placed 13th or higher at at least one event (monthly or weekly).</p>
              <p>On the following rows, type the name of the event in the first cell, and then fill in all of the player's placings in their respective columns.</p>
              <p>If a player didn't attend that tournament, then leave their cell blank.</p>
              <p><strong>IMPORTANT: All weekly events must start with 'weekly'!</strong> This is case-insensitive. If your results look strange, this may be why!</p>
            </div>
            <div className="note__image csv-image">
            </div>
          </div>
        </section>

        <section id="about" className="note">
          <div className="container">
            <div className="note__text">
              <header>
                <h2>How is the PR calculated?</h2>
              </header>
              
              <section>
                <h3>Short answer: When you place high at tournaments, you earn a PR score.</h3>
                <h3>Your final PR score is the average of your tournament PR scores, weighted heavily toward your results at monthlies.</h3>
              </section>

              <section>
                <h3>Long answer: The PR is calculated using the following algorithm.</h3>
                <ul>
                  <li>
                    <p>At every event where you place 13th or higher, you earn PR points.</p>
                    <p>You earn the following number of points per placement:</p>
                    <ul>
                      <li>1st Place - 1.0</li>
                      <li>2nd Place - 0.8</li>
                      <li>3rd Place - 0.7</li>
                      <li>4th Place - 0.5</li>
                      <li>5th Place - 0.4</li>
                      <li>7th Place - 0.3</li>
                      <li>9th Place - 0.2</li>
                      <li>13th Place - 0.1</li>
                    </ul>
                    <p>There is an intentional point boost between the winner and the runner-up, and the top 3 and the 
                      rest - this is to incentivize and reward high tournament placings.</p>
                  </li>
                  <li>
                    <p>Weeklies only count toward your score if you attend <strong>2 or more</strong> of them.</p>
                  </li>
                  <li>
                    <p>Monthlies have a <strong>weighting of 75%</strong> (or 100% if you don't attend 2 weeklies).</p>
                    <p>Weeklies have a <strong>weighting of 25%</strong>.</p>
                  </li>
                  <li>
                    <p>There is a penalty for missing monthlies: Your score for every monthly that you miss is the average 
                      of your other monthly scores, minus 0.1.</p>
                    <p>If you miss more than 1 monthly, this penalty <strong>stacks</strong>: the average calculated for your second 
                    missed monthly's score includes the previously calculated score for your first missed monthly (and so on).</p>
                  </li>
                  <li>
                    <p>There is no penalty for missing weeklies - only the weeklies you attend affect your score.</p>
                  </li>
                </ul>

                <h4>Special cases</h4>
                <ul>
                  <li>
                    <p>If two players tie or have scores within 0.02 of each other, they will have a <strong>PR battle</strong>.</p>
                    <p>PR battles are generally at least a best-of-five, if not longer - this can depend on a case-by-case basis.</p>
                  </li>
                  <li>
                    <p>In exceptional cases, the TOs reserve the right to override the alogirthm if it would give a 
                      ranking that is highly inaccurate to a player's skill and/or level of success during the semester. 
                      <em>This should always be a last resort!</em></p>
                    <p>Real-life example: One semester, our top Smash 4 player almost exclusively attended monthlies where several 
                      very good out-of-region players also competed. This meant that, on average, his scores were considerably 
                      lower than our second-best player, but in reality, his skill level was considerably higher than everyone else's. 
                      For this semester, the algorithm was overriden, and he was given 1st place by default.</p>
                  </li>
                </ul>
              </section>
            </div>
            <div className="note__image pr-image">
            </div>
          </div>
        </section>


        <Footer/>
      </div>
    );
  }
}

export default App;
