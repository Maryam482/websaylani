import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         isLogin:'true',
        }
    }



render(){
    return(
        <div>

            {
                this.state.isLogin == true ?
                <div>
                    <button className="btn" onClick={() =>this.setState({isLogin:false})}>Logout</button>
                    <p>Please login</p>
                    </div>
                    :
                    <div>
                        <button className="btn" onClick={()=> this.setState({isLogin:true})}>Login</button>
                        <p>You're log in </p>
                        </div>
            }
        {/* <br/>  <button onClick={this.toggle}>Login</button><br/>
          {this.state.tog ? 'you are logged in' : 'please log in'} */}
        </div>
    )
}
}
export default Toggle;