import React,{Component} from 'react'

class Count extends Component{
    state = {
        count: 0
    }
    decrementHandaller = ()=>{
        if(this.state.count > -5){
            this.setState({
                count: this.state.count - 1
            })
        }else{
            alert('Can\'t be smaller then '+ (this.state.count))
        }
       
    }
    incrementHandaller = () => {
        if(this.state.count < 10){
            this.setState({
                count: this.state.count + 1
            })
        }else{
            alert('Can\'t be greter then '+ (this.state.count))
        }
    }
    render(){
        return(
            <div>
                <button onClick={this.decrementHandaller}> - </button>
                <span> {this.state.count} </span>
                <button onClick={this.incrementHandaller}> + </button>
            </div>
        )
    }
}

export default Count