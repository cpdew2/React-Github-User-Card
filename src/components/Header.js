import React from 'react';
import styled from 'styled-components';

const UserImg = styled.img `
    max-width: 270px;
`
class Header extends React.Component {
    render( {
        return ( 
            <section className='header'>
                <UserImg src={this.props.image} alt='User Card' />
                <h2>{this.props.login}</h2>
            </section>
        );
    
    })
}

export default Header;