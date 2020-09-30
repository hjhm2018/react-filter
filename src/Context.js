import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                response.json()
                    .then(data => {
                        this.setState({
                            users: data
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;


