//npm import
import React from 'react';
import axios from 'axios';

//local import

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get(`https://swapi.co/api/people/.json`)
    .then(
      res => {
        const datas = res.data;
        this.setState({posts:datas.results});
        console.log(this.state.posts)
      }
    )
  }
  render() {
    return (
      <div>
        <h1>Personnages</h1>
        <ul>
          {this.state.posts.map(post => <li key={post.name}>{post.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App;
