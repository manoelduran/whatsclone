import styled from 'styled-components';

export const Container = styled.div`
width: 100% ;
height: 100% ;
display: flex ;
flex-direction: column ;
align-items: center ;
justify-content: center ;
`;

export const InputName = styled.input`
margin-top: 60px ;
width: 600px;
padding: 15px ;
border-radius: 6px ;
background: ${({theme}) => theme.border} ;
`;

export const PasswordInput = styled.input`
margin-top: 30px ;
width: 600px;
padding: 15px ;
border-radius: 6px ;
background: ${({theme}) => theme.border} ;
`;


export const Logo = styled.img``;

export const CreateContainer = styled.div`
margin-top: 18px ;
width: 600px ;
display: flex ;
align-items: center ;
justify-content: space-between ;
`;

export const CreateUser = styled.button`
border: none;
background: ${({theme}) => theme.withe_background} ;
`;
export const RecoverPassword = styled.button`
border: none;
background: ${({theme}) => theme.withe_background} ;
`;

export const LoginButton = styled.button`
width: 600px ;
margin-top: 18px ;
border: none;
padding: 15px ;
border-radius: 6px ;
background: ${({theme}) => theme.header} ;
`;

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



