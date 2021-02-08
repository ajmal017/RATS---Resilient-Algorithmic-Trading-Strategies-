import React, { Component } from "react";
import axios from "axios";
import "../../styles/dashboardStyle.css";

class Dashboard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        pastFiles: [],
        algorithms: ["BasicTemplateAlgorithm", "CustomBenchmarkAlgorithm"]
      };  
  }
componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/quant_connect/algorithm_manager/get_past_runs/")
    .then((response) => {
      this.setState({pastFiles: response.data.past_runs});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="lp">
        <div className="run-algs-content">
          <div>
            <span className="run-algs-header">Run Algorithm</span>
          </div>
          <form>
            <div>
              <label htmlFor="alg-name">Algorithm</label><br></br>
              <select id="alg-name" placeholder="Algorithm">
              {this.state.algorithms.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="cashAmount">Cash Amount</label><br></br> 
                <input id="cashAmount" placeholder="Cash Amount" className="basic-slide" type="number">
                </input>
            </div>
            <div>
              <label htmlFor="start-date">Start Date</label><br></br> 
                <input id="start-date" placeholder="Start Date" type="date">
                </input>
            </div>
            <div>
              <label htmlFor="end-date">End Date</label><br></br> 
                <input id="end-date" placeholder="End Date" type="date">
                </input>
            </div>
            <div>
              <span>
                <input id="submit-alg" type="Submit" ></input>
              </span>
            </div> 
          </form>
        </div>
        <div className="past-run-content">
        <div>
            <span className="past-runs-header">Past Runs</span>
        </div>
        <ul id="file-name">
              {this.state.pastFiles.map(option => (
                <li className="file-list" key={option} value={option}>
                  {option}
                </li>
                ))}
        </ul>
        </div>
      </div>
    );
  }
}
export default Dashboard;
