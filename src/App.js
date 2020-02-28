import React from 'react';
import './App.scss';

import IntroCard from './components/intro-card'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  submitBudget = (e) => {
    e.preventDefault();

    this.setState({
      budget: this.state.inputValue,
      inputValue: ''
    });
  }

  render() {
    console.log(this.state.budget);
    return (
      <div className="App">
        {
          this.state.budget !== undefined 
          ? <h1>We have a budget!</h1> 
          : <IntroCard
            submitBudget={this.submitBudget} />
        }
      </div>
    );
  }
}

export default App;
