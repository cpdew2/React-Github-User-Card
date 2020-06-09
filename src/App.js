import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import UserCard from './components/UserCard';
import FriendList from './components/FriendList';
//import { findByLabelText } from '@testing-library/react';
import axios from 'axios';


const Container = styled.div `
margin: auto;
display: flex;
max-width: 40%;
justify-content: space-between;
`

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: 'Cassandra-Dew',
      gitUser: {},
      followers: [],
      inputValue: ''
    }
  }

  getUser = () => {
    axios
    .get(`https://api.github.com/$this.state.username}`)
      .then((res) => {
        this.setState({
        })
      })
      .catch((err) => {
        console.log(err)
      })
      axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
        .then((res) => {
          this.setState({
            followers: res.data
          })
        })
  }

  componentDidMount() {
    this.getUser();
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.username !== this.state.username) {
      this.getUser();
    } else {
      return
    }
  }

  render() {
    return (
      <Container>
        <UserCard {...this.state.gitUser} />
        <FriendList followers={this.state.followers} />
      </Container>
    )
  }
}

export default App;


