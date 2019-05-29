import React, {Component} from 'react';
import './App.css';
import ScanContainer from "./ScanContainer";

class App extends Component {

    

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src="https://static1.squarespace.com/static/5beeb394365f02057e0aa8aa/t/5beeb6831ae6cfd2651c7afe/1557240819181/?format=200w" alt=""/>
                    <div>Software Challenge</div>
                </header>   
                <ScanContainer/>
            </div>
        );
    }
}

export default App;
