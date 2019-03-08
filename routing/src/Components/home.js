import React ,{ Component }from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


/*const Home = ()=>{*/
class Home extends Component{
  state = {
    posts:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(res=>{
      console.log(this.state);
      this.setState({
        posts: res.data.slice(0,20)
      })
      console.log(this.state)
    })
  }
  render(){
    const { posts } = this.state;
    const postList = posts.length?(posts.map(post=>{
      return(
        <div className='post card' key={ post.id }>
          <div className='card-item'>
          <Link to={'/' + post.id}>
            <span className='card-title'>{ post.title }</span>
          </Link>
            <p>{ post.body }</p>
          </div>
        </div>
      )
    })
  ):(<p>No posts yet !</p>)
    return(
      <div>
        <div className='container center'>
          <h4>Home Page</h4>
          <p> This my Home page. </p>
          { postList }
        </div>
      </div>
    )
  }
}

export default Home;
