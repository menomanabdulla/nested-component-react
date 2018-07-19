import React,{Component} from 'react'

class Post extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.posts.title}</h3>
                <h3>{this.props.posts.body}</h3>
            </div>
        )
    }
}

export default Post