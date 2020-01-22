import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value:2},
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
        counters[index] ={...counter};
        counters[index].value++;
        this.setState({counters});
    }

    render() { 
        return (
            <React.Fragment>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Navbar</a>
                </nav>
                {
                    this.state.counters.map(data=>{
                        return <Counter 
                        onDelete={this.handleDelete}
                        key={data.id} id={data.id}
                        value={data.value}
                        onIncrement={this.handleIncrement}
                        counter={data}/>
                    })
                }
            </React.Fragment>
            
        );
    }
}
 
export default Counters;