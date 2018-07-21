import React,{Component} from 'react'
import Post from './post/post'
import Reaction from './reaction/reaction'
import Count from './count/count'
import TwoWay from './two-way-databuinding/data-buinding'
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
    this.reaction = [
      {like: 100,comment: 50},
      {like: 50,comment: 70},
      {like: 60,comment: 30},
      {like: 80,comment: 20}
    ]
  }
  render(){
    return(
      <div>
          <h1 className="text">Hello world</h1>

          <Count />

          <TwoWay />
          
          {
              this.posts.map(
                (item,index)=>{
                  return <Post key = {index}  post = {item} />
                }
              )
          }
          {
            this.reaction.map((reactionItem,index)=>{
              return <Reaction key = {index} reaction = { reactionItem } />
            })
          }
      </div>
    )
  }
}

export default App