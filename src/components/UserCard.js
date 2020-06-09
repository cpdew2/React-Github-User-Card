import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Card from './components/Card';

const Cards = styled.div `
    box-sizing: border-box;
    background-color: #fSf5dc;
    max-width: 300px;
    max-height: 800px;
    border: 7px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
`

class UserCard extends Component {
    render() {
        return (
            <Cards>
                <Header image={this.props.avatar_url} usersname={this.props.login} />
                <Card followers={this.props.followers} following={this.props.following} />
            </Cards>
        );
    }
}

export default UserCard;