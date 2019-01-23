import React, { Component } from "react";
import "./App.css";


export default class App extends Component {
    state = {
        second: 0,
        minute: 0,
        hour: 0,
        paused: false
    }
    displaySecond = () => {
        if (this.state.second <10) {
            return '0' + this.state.second;
        }
        else {
            if (this.state.second == 60) {
                let minute = this.state.minute +1;
                this.setState({second:0,minute});
            }
            return this.state.second;
        }
    }

    displayMinute = () => {
        if (this.state.minute <10) {
            return '0' + this.state.minute;
        }
        else {
            if (this.state.minute == 60) {
                let hour = this.state.hour +1;
                this.setState({minute:0,hour});
            }
            return this.state.minute;
        }
    }

    displayHour = () => {
        if (this.state.hour <10) {
            return '0' + this.state.hour;
        }
        else {
            return this.state.hour;
        }
    }


    startTimer = () =>{
        this.setState({paused:false});
        if(this.state.paused == false) {
            let second = this.state.second +1;
            this.setState({second});
            setInterval(() =>{
                let second = this.state.second +1;
                this.setState({second});
            },1000);
        }
    }

    pauseTimer = () =>{
        this.setState({paused:true});
    }
    
    
    render() {
        let {minute, hour} = this.state;

        return(
            <main>
                <h1>Stopwatch</h1>
                <div class="display">
                    <h2>{this.displayHour()}:{this.displayMinute()}:{this.displaySecond()}</h2>
                </div>
                <div>
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.pauseTimer}>Stop</button>
                    <button >Lap</button>
                    <button >Reset</button>   
                </div>
            </main>
        )
       
    }
}