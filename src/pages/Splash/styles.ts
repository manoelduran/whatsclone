import styled from 'styled-components';

export const Container = styled.div`
width: 100% ;
height: 100% ;
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
`;

export const LoadingBar = styled.div`
margin-top: 60px ;
width: 600px;
height: 1px ;
background: ${({theme}) => theme.border} ;
`;

export const Logo = styled.img``;

export const Name = styled.h1`
margin-top: 50px ;
font-size: 20px ;
line-height: 24px ;
font-weight: 500 ;
color: ${({theme}) => theme.name} ;
`;

export const EncryptContainer =styled.div`
margin-top: 22px ;
display: flex ;
align-items: center;
justify-content: center ;
`;

export const Icon = styled.img``;

export const EncryptText = styled.span`
margin-left: 12px;
font-size: 16px ;
line-height: 20px ;
color: ${({theme}) => theme.encrypt} ;
`;
