import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper'


const Container = styled.div`
background-color: rgb(238, 238, 238);
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;


const List = styled.ul`
display: flex;`
 
function Navigation( {items} ) {
    return ( 
        <Container>
            <Wrapper>
                <List>
                    {items.map(item => (
                        <li>
                            <a>{item.content}</a>
                        </li>
                    ))}
                </List>
            </Wrapper>
        </Container>
    )
}
 
export default Navigation;