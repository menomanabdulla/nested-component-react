import React,{Component} from 'react'
import Post from './post/post'
import './App.css';
class App extends Component{
  constructor (){
    super()
    this.posts = [
      {
        title: 'This is title 1',
        body : 'This is body 1'
      },{
        title: 'This is title 2',
        body : 'This is body 2'
      },{
        title: 'This is title 3',
        body : 'This is body 3'
      },{
        title: 'This is title 4',
        body : 'This is body 4'
      }
    ]
  }
  render(){
    return(
      <div>
          <h1 className="text">Hello world</h1>
          <Post posts = {this.posts[0]} />
          <Post posts = {this.posts[1]} />
          <Post posts = {this.posts[2]} />
          <Post posts = {this.posts[3]} />
      </div>
    )
  }
}

export default App