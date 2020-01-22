import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand">Total Counter
                    <span className="badge badge-pill badge-secondary">{this.props.totalCount}</span>
                </a>
                
            </nav>   
        );
    }
}
 
export default NavBar;