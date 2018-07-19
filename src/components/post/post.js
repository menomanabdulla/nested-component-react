import React,{Component} from 'react'

class Post extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <h3>{this.props.body}</h3>
            </div>
        )
    }
}

export default Post