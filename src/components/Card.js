import React, { Component } from 'react';

class Card extends Component {
    render( {
        return (
            <section className='card'>
                <h4>Followers: {this.props.followers}</h4>
                <h4>Following: {this.props.following}</h4>
                {this.props.email !== null && (
                    <h4>Email: {this.props.email}</h4>
                )}
            </section>
            <a href={`https://github.com/${this.props.login}`}>GitHub</a>
        );
    });
};

export default Card;