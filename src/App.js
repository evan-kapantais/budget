import React from 'react';
import './App.scss';

import IntroCard from './components/intro-card'
import BudgetCard from './components/budget-card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      budget: null,
      expenses: {}
    }
  }

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  submitBudget = (e) => {
    e.preventDefault();


    const card = e.target.parentNode;

    setTimeout(() => {
      card.style.display = 'none';

      this.setState({
        budget: this.state.inputValue,
        inputValue: ''
      });
      
    }, 300);

    card.style.opacity = 0;
  }

  componentDidUpdate = () => {
    // console.table(this.state);
  }

  render() {
    return (
      <div className="App">
        {
          this.state.budget !== null 
          ? <BudgetCard
            budget={this.state.budget}
            />
          : <IntroCard
            onChange={this.onChange}
            submitBudget={this.submitBudget} />
        }
      </div>
    );
  }
}

export default App;
