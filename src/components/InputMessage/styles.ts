import styled from 'styled-components';

export const Container = styled.div`
margin-right: 30px ;
display: flex ;
align-items: center ;
`;

export const Input = styled.input`
width: 620px ;
padding: 14px  ;
border-radius: 50px;
font-size: 14px ;
line-height: 17px;
color: ${({theme}) => theme.text} ;
border: none ;
background: ${({theme}) => theme.withe_background} ;
`;