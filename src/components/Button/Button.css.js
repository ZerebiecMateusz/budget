import styled from "styled-components";

const RootButton = styled.button`
color: gray;
cursor: inherit;
border: none;
background-color: transparent;
cursor: ${props => props.to || props.onClick || props.type === 'submit' ? 'pointer' : 'default'}
&:hover {
    opacity: .8;
}
`;

export const InlineButton = styled(RootButton)`
&:hover {
    text-decoration: underline;
}
`;

export const RegularButton = styled(RootButton)`
background: pink;
margin: 2px;
padding: 4px;
border: 2px solid pink;
border-radius: 3px;
`;