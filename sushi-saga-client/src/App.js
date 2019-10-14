import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
  state = {
    allSushi: [],
    currentSushi: 0,
    wallet: 50
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data =>
        this.setState({
          allSushi: data
        })
      );
  }

  filterEatenSushi = () => {
    return this.state.allSushi.filter(sushi => sushi.eaten);
  };

  eatSushi = (id, price) => {
    if (this.state.wallet < price) {
      alert('Get a job');
    }

    let eatenSushi = this.state.allSushi.map(sushi => {
      if (sushi.id === id) {
        sushi.eaten = true;
      }
      return sushi;
    });
    // console.log(eatenSushi);
    this.setState({
      allSushi: eatenSushi
    });
  };

  sushiToDisplay = () => {
    const start = this.state.currentSushi;
    return this.state.allSushi.slice(start, start + 4);
  };

  handleAddSushi = () => {
    // console.log('click');
    this.setState({
      currentSushi: this.state.currentSushi + 4
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiToDisplay={this.sushiToDisplay()}
          handleAddSushi={this.handleAddSushi}
          eatSushi={this.eatSushi}
        />
        <Table filterEatenSushi={this.filterEatenSushi} />
      </div>
    );
  }
}

export default App;
