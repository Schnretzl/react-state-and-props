// 1. Exploring State and Props in Class Components

import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // Task 1: Code Correction
    // Corrected function
    changeName = () => {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;