import React from 'react';
import axios from 'axios';
import Gitcard from './Gitcard';
import './App.css';
import Followers from './Followers';
import SearchTheme from './SearchTheme';

class App extends React.Component {
  constructor() {
    super();
  this.state = {
    user: 'Developer3027',
    myFollowers: [],
  }
}

  

GetMyUser = () => {
    axios
    .get(`https://api.github.com/users/${this.state.user}`)
    .then(res => this.setState({ user: res.data }))
    .catch(err => {
        console.log('Axios, User:', err);
    });
};

GetMyFollowers = () => {
    axios
        .get(`https://api.github.com/users/${this.state.user}/followers`)
        .then(res => this.setState({ myFollowers: res.data }))
        .catch(err => {
            console.log('Axios, Followers:', err);
    })
};

  componentDidMount() {
    this.GetMyUser();
    this.GetMyFollowers();
  }

componentDidUpdate(prevProps, prevState) {
  if (prevState.user !== this.state.user) {
    axios
    .get(`https://api.github.com/users/${this.state.user}`)
    .then(res => {
      this.setState({
        user: res.data
      });
      return axios.get(res.data.followers_url);
    })
    .then(res => {
      this.setState({
        myFollowers: res.data
      })
    })
    .catch(err => console.log(err));
  }
}

search = (query) => {
  this.setState({
    user: query
  })
}

  render() {

    return (
      <div className="App">
        <div>
          <SearchTheme search={this.search} />
        </div>
        <div className="cardLayout">
          <Gitcard className="gitCard" user={this.state.user} />
          <Followers className="followers" follower={this.state.myFollowers} />
        </div>
      </div>
    );
  }
}
  

export default App;
