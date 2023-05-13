import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Container = styled.div`
background-color: rgb(238, 238, 238);
font-size: 1.5em;
text-align: center;
color: palevioletred;
padding: 10px 0;
`;


const List = styled.ul`
display: flex;`
 
function Navigation( {items = [], RightElement} ) {
    return ( 
        <Container>
            <Wrapper>
                <List>
                    {items.map(item => (
                        <li key={item.to}>
                            <Link to={item.to}>{item.content}</Link>
                        </li>
                    ))}
                </List>
                {RightElement}
            </Wrapper>
        </Container>
    )
}
Navigation.prototype = {
    items: PropTypes.array.isRequired,
}
 
export default Navigation;