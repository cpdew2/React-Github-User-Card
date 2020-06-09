import React, { Component } from 'react';

class CardItems extends Component {
    render() {
        return (
            <section className='card'>
                <h4>Followers: {this.props.followers}</h4>
                <h4>Following: {this.props.following}</h4>
                {this.props.email !== null && (
                    <h4>Email: {this.props.email}</h4>
                )}
            <a href={`https://github.com/${this.props.login}`}>GitHub</a>
            </section>
        );
    };
}

export default CardItems;