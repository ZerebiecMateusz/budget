import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper'
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button } from 'components'


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
    const { t } = useTranslation();

    return ( 
        <Container>
            <Wrapper>
                <List>
                    {items.map(item => (
                        <li key={item.to}>
                            <Button to={item.to}>{t(item.content)}</Button>
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