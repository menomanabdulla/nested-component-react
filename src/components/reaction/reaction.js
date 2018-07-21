import React,{Component} from 'react'

class Reaction extends Component{
    /*Constructor(Props){
        super()
    }*/
    render(){
            console.log(this.props.reaction.like)
            console.log(this.props.reaction.comment)
        return(
            <div>
                <h4>post like : {this.props.reaction.like}</h4>
                <h4>post comment : {this.props.reaction.comment}</h4>
            </div>
        )
    }
}

export default Reaction 