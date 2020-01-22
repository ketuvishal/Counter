import React from 'react';

const Counter = ({id, value}) => { 
    return (
        <div>
            <div>Counter #{id}</div>
            <span className="badge badge-warning m-2">{value}</span>
            <button className="btn btn-primary btn-sm m-2">Increment</button>
            <button className="btn btn-danger btn-sm">Delete</button>
        </div>
        );
}

export default Counter;