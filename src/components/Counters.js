import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() { 
        return (
            <React.Fragment>
                {
                    this.props.counters.map(data=>(
                        <Counter
                        onDelete={this.props.onDelete}
                        key={data.id} id={data.id}
                        value={data.value}
                        onIncrement={this.props.onIncrement}
                        counter={data}/>
                    ))
                }
            </React.Fragment>
            
        );
    }
}
 
export default Counters;