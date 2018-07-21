import React,{Component} from 'react'

class TwoWay extends Component{
    state={
        value : 'Hello world'
    }
    valuChange = (event) =>{
        console.log(event.target)
        this.setState({
            value: event.target.value
        })
    }
    render(){
        return(
            <div>  
                <h1>Two way data buinding example</h1>
                <input type = 'text' onChange = { this.valuChange} value = {this.state.value} />
                <h3>{this.state.value}</h3>
            </div>
        )
    }
}
export default TwoWay