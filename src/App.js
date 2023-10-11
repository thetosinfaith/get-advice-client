import React from "react";
import axios from "axios";

import './App.css'

class App extends React.Component{
    state = {
        advice: ' '
    }

    componentDidMount(){
        this.fetchAdvice();
    
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const {advice} = response.data.slip;

                this.setState({advice})

            
        
        })

        .catch((error) => {
            console.log(error)

        });

    }

    render(){
        const {advice} = this.state;
        return(
            <div className="App">
                <div className="footer">
          <a href="https://github.com/thetosinfaith" target="_blank" rel="noopener noreferrer">
            Project by Tosin Faith
          </a>
          |
          <span>Built with ❤️ by thetosinfaith</span>
          </div>
        
                
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give me advice</span>
                    </button>
                </div> 
            </div>

            
        )
    }
}

export default App;
