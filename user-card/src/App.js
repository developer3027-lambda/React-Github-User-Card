import React from 'react';
import axios from 'axios';
import Gitcard from './Gitcard';
import './App.css';
import Followers from './Followers';
import SearchTheme from './SearchTheme';

class App extends React.Component {
  state = {
    user: {},
    myFollowers: [{}]
  }

  

GetMyUser = () => {
    axios
    .get('https://api.github.com/users/Developer3027')
    .then(res => this.setState({ user: res.data }))
    .catch(err => {
        console.log('Axios, User:', err);
    });
};

GetMyFollowers = () => {
    axios
        .get('https://api.github.com/users/Developer3027/followers')
        .then(res => this.setState({ myFollowers: res.data }))
        .catch(err => {
            console.log('Axios, Followers:', err);
    })
};

  componentDidMount() {
    this.GetMyUser();
    this.GetMyFollowers();
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <div>
          <SearchTheme />
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
