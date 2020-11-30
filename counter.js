import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
handlePlus = () =>{
 this.setState({count: this.state.count+1})
}
handleMinus = () =>{
    this.setState({count:this.state.count-1})

}
render(){
    return(
       <div>
         <br/> <button onClick={this.handlePlus}>Add</button>
           <button onClick={this.handleMinus}>Subtract</button>
           <h3>Result {this.state.count}</h3>
       </div> 
    )
}

}
export default Counter;