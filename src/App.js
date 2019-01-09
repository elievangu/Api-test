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
    axios.get(`https://swapi.co/api/people/1/.json`)
    .then(
      res => {
        const datas = res.data;
        this.setState({posts:datas});
        console.log(this.state.posts)
      }
    )
  }
  render() {
    return (
      <div>
        <h1>{this.state.posts.name}</h1>
      </div>
    )
  }
}

export default App;
