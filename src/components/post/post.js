import React,{Component} from 'react'

class Post extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h3>{this.props.post.title}</h3>
                <h3>{this.props.post.body}</h3>
            </div>
        )
    }
}

export default Post