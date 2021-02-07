import React, { Component } from "react";
import '../../styles/dashboardStyle.css';

class Dashboard extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };  
  }
  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/quant_connect/algorithm_manager/set_algorithm/', {
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        algorithm: "AddOptionContractFromUniverseRegressionAlgorithm",
        cash: "5000005"
      }),
    }).catch(error => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
  };
  render() {
    return (
      <div className="lp">
        <div className="run_algs_content">
          <div>
            <span>Run Algorithm</span>
          </div>
          <div>
            <span>Algorithm: 
              <input>
              </input>
            </span>
          </div>
          <div>
            <span>Cash: 
              <input>
              </input>
            </span>
          </div>
        </div>
      </div>
    );
  }
};
export default Dashboard;
