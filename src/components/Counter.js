import React from 'react';

const Counter = ({id, value, onDelete, onIncrement, counter}) => { 
    return (
        <div>
            <div>Counter #{id}</div>
            <span className="badge badge-warning m-2">{value}</span>
            <button onClick={()=>onIncrement(counter)} className="btn btn-primary btn-sm m-2">Increment</button>
            <button onClick={()=>onDelete(id)} className="btn btn-danger btn-sm">Delete</button>
        </div>
        );
}

export default Counter;