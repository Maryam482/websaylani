import React from 'react';

class Button extends React.Component{
constructor(props){
    super(props)
    this.state = {color:'red', color1:'white'}
}
handelOn = (e) =>{
    console.log(e.target.value)
    this.setState ({color:'white'}) 
}
handleOff = (e) =>{
    console.log(e.target.value)
    this.setState ({color1:'black'}) 
}
render(){
    return(
        <div >
        <button style = {{backgroundColor: this.state.color}} onClick={this.handelOn}>On</button>
        <button style = {{backgroundColor: this.state.color1}} onClick={this.handleOff}>Off</button>
        </div>
    )
}

}
export default Button;