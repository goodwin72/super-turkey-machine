import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import '../styles/PRCalculator.css';
import '../styles/Common.css';
import Modal from './Modal'

const WEEKLY_PREFIX = "weekly";
const MIN_WEEKLY_ATTENDANCE_TO_COUNT = 2;
const WEIGHTING_MONTHLIES = 0.75;
const WEIGHTING_WEEKLIES = 0.25;

class PRCalculator extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {},
      modalVisible: false
    };

    this.processFile = this.processFile.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }
  
  processFile(fileData){
    //Outline of data returned from CSVReader:
    // Array 1: Name of players. data[0][0] should always be blank.
    // Array 2+: Each event. data[1+][0] is the name of the event.
    // Each player's data: data[0][playerIndex] for name, data[1][playerIndex] for results, and so on until a blank array is found
    
    //console.log(fileData);

    let processedFileData = [];
    //For each array in the data
    fileData.forEach((value, index) => {
      //The first array contains the names of all of the players.
      //  We'll initalize a player object and add it to processedFileData.
      if(index === 0){
        value.forEach((value, index) => {
          if(index > 0){
            processedFileData.push({
              "name": value,
              "monthliesResults": {},
              "weekliesResults": {},
              "total": null
            })
          }
        })
      }
      //The later arrays contain all of the results for players at each tournament
      //  The first entry is the name of the tournament. Entries past the first
      //  correlate to the players' results, in the order they were processed above.
      else{
        let name = "";
        value.forEach((value, index) => {
          if(index === 0){
            name = value;
          }
          else{
            let result = parseInt(value);
            if (Number.isNaN(result)){
              result = 0;
            }

            //console.log(String(name.substring(0,6)).toLowerCase());
            if(String(name.substring(0,6)).toLowerCase() === WEEKLY_PREFIX){
              processedFileData[index - 1].weekliesResults[name] = result;
            }
            else{
              processedFileData[index - 1].monthliesResults[name] = result;
            }
          }
        })
      }
    })

    processedFileData = processedFileData.map((value) => {
      //console.log(value.name);
      //console.log(value.monthliesResults);
      //console.log(value.weekliesResults);
      //console.log("---------------------------");
      value.total = this.calculateTotal(value.monthliesResults, value.weekliesResults);
      return value;
    })

    processedFileData.sort((a, b) => {
      return b.total - a.total;
    })
    console.log("Processed data: ", processedFileData);

    this.setState({
      data: processedFileData, 
      modalVisible: true
    });
  }

  calculateTotal(monthliesResults, weekliesResults){
    //MonthlyCount is a running total of how many tournaments the player attended.
    //  This variable is called 'monthlyCount' and not 'monthliesAttended' because
    //  we need to use it as part of a counting up toward the total number of tournaments
    //  in the 'punishing for absences' step.
    let total = 0, monthlyCount = 0, weekliesAttended = 0, monthlyTotal = 0, weekliesTotal = 0;

    Object.keys(monthliesResults).forEach((value) => {
      //If they attended, convert their placing to a score.
      if(monthliesResults[value]){
        monthlyTotal += this.scoreToPoints(monthliesResults[value]);
        monthlyCount++;
      }
    })
    
    Object.keys(weekliesResults).forEach((value) => {
      //If they attended, convert their placing to a score.
      if(weekliesResults[value]){
        weekliesTotal += this.scoreToPoints(weekliesResults[value]);
        weekliesAttended++;
      }
    })

    //Port of Joey's algorithm for punishing monthly absences.
    //The player's score for a missed tournament is equal to an average of the scores for
    //  tournaments that they attended, minus a penalty.
    //  This penalty stacks in a way if a player misses more than one event. For missed
    //  events passed the first, the average for that event is calculated with prior
    //  penalty-average scores in the mix.
    if(monthlyCount > 0){
      while(monthlyCount < Object.keys(monthliesResults).length){
        let absenceScore = (monthlyTotal / monthlyCount) - .1;
        monthlyTotal = monthlyTotal + absenceScore;
        monthlyCount++;
      }
    }

    console.log("Weeklies attended: ", weekliesAttended);

    //Average
    if (weekliesAttended >= MIN_WEEKLY_ATTENDANCE_TO_COUNT && weekliesAttended > 0){
      //console.log("Weeklies total: ", (weekliesTotal / weekliesAttended));
      total = (monthlyTotal / Object.keys(monthliesResults).length) * WEIGHTING_MONTHLIES + 
        (weekliesTotal / weekliesAttended) * WEIGHTING_WEEKLIES;
    }
    else{
      total = monthlyTotal / Object.keys(monthliesResults).length;
    }

    total = +total.toFixed(10);

    return total;
  }

  scoreToPoints(score){
    let points = 0;
    switch(score){
      case 1:
        points = 1;
        break;
      case 2:
        points = .8;
        break;
      case 3:
        points = .7;
        break;
      case 4:
        points = .5;
        break;
      case 5:
        points = .4;
        break;
      case 7:
        points = .3;
        break;
      case 9:
        points = .2;
        break;
      case 13:
        points = .1;
        break;
      default:
        points = 0;
        break;
    }

    return points;
  }  

  onModalClose(){
    this.setState({
      modalVisible: false
    })
  }
  
  render() {
    const modal = this.state.modalVisible ? <Modal data={this.state.data} onClose={this.onModalClose}/> : <div></div>

    return (
      <section className="PRcalculator">
        <div className="vertical-table-center-wrapper">
          <label>
            Select a <a href="#formatting">properly-formatted</a> <span className="yellow-text">.CSV</span> file to calculate PR
          </label>
          <CSVReader
            cssClass="react-csv-input"
            onFileLoaded={this.processFile}
          />
          {modal}
        </div>
      </section>
    )
  }
}

export default PRCalculator;