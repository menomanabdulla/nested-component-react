import React,{Component} from 'react'
import Post from './post/post'
import './App.css';
class App extends Component{
  constructor (){
    super()
    this.post = {
        title: 'This is title 1',
        body : 'This is body 1'
    }
  }
  render(){
    return(
      <div>
          <h1 className="text">Hello world</h1>
          <Post title = {this.post.title} body = {this.post.body}/>
      </div>
    )
  }
}

export default App