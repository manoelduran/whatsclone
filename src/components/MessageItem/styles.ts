import styled from 'styled-components';

export const Container = styled.div`
margin-bottom: 10px ;
display: flex ;
`;

export const MessageContainer = styled.div`
background-color: ${({theme}) => theme.withe_background};
border-radius: 10px ;
box-shadow: 0 1px 1px #CCC ;
display: flex ;
flex-direction: column ;
padding: 3px ;
max-width: 90% ;
`;
export const MessageName = styled.span`
font-size: 14px ;
margin: 5px 40px 5px 5px ;
`;
export const MessageDate = styled.span`
font-size: 11px ;
color: #999 ;
margin-right: 5px ;
text-align: right ;
height: 15px ;
margin-top: -15px ;
`;