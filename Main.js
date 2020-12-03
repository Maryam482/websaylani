import React, { Component } from 'react';
import Name from './Name';

export class Main extends Component {
    constructor(props){
        super(props)
        this.state= {
          name: 'Maryam',
          show:'Hello good morning'
        }
    }

    render() {
        return (
            <div>
          <Name name={this.state.name} show={this.state.show}/>
            </div>
        )
    }
}

export default Main
