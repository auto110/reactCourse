import React, {component, Component} from "react"

class Message extends Component{
    render(){
        return(
            <div className="Message">
            <p> {this.props.message}</p>
            <button onClick = {()=>this.props.removeItem(this.props.id)}> 
                Remove me 
            </button>
            </div>
        )
    }
}

export default Message;