import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/Counters';

class App extends React.Component {
  state = { 
    counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4,value:0}
    ]
}

handleDelete =(idValue) => {
    const counters = this.state.counters.filter(data =>data.id!==idValue)
    this.setState({counters});
}
handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters});
}
  render() {
    return (
      <div>
        <NavBar totalCount={this.state.counters.filter(data=>data.value>0).length}/>
        <Counters
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </div>
    );
  }
}

export default App;
