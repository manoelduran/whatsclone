import styled from 'styled-components';

export const Container = styled.div`
padding: 8px 16px ;
display: flex ;
align-items: center ;
position: relative ;
`;

export const Image = styled.img`
position: absolute ;
padding: 14px 18px ;
`;

export const Input = styled.input`
width: 510px ;
padding: 14px 54px ;
border-radius: 50px;
font-size: 14px ;
line-height: 17px;
color: ${({theme}) => theme.input_text} ;
border: none ;
background: ${({theme}) => theme.gray_background} ;
`;