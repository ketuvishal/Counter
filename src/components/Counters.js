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

    handleIncrement =(id)=>{
        const counters = [...this.state.counters];
        counters
    }
    render() { 
        return (
            <React.Fragment>
                {
                    this.state.counters.map(data=>{
                        return <Counter key={data.id} id={data.id} value={data.value}/>
                    })
                }
            </React.Fragment>
            
        );
    }
}
 
export default Counters;