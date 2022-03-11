import styled from 'styled-components';

interface ContainerProps{
    isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
width: 540px;
display: flex;
align-items: flex-start;
justify-content: left;
padding: 13px ;
background: ${({isActive, theme}) => isActive ? theme.gray_background : theme.withe_background} ;
`;

export const Photo = styled.img`
width: 50px;
height: 50px ;
border-radius: 50% ;
border: none ;
`;

export const ChatContainer = styled.div`
width:447px ;
padding: 0px 12px ;
padding-bottom: 13px ;
display: flex ;
align-items: flex-start;
justify-content: space-between ;
border-bottom: 1px solid ${({theme}) => theme.border} ;
`;

export const InfoContainer = styled.div`
display: flex ;
flex-direction: column ;
align-items: flex-start;
justify-content: space-between ;
`;

export const Name = styled.h2``;

export const MessageContainer = styled.div`
margin-top: 5px ;
display: flex ;
align-items: center;
`;

export const Check = styled.img``;

export const LastMessage = styled.p`
margin-left: 5px ;
`;

export const Time = styled.span``;
