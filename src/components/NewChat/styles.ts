import styled from "styled-components";

export const Container = styled.div`
width: 100%;
margin: 0px ;
max-width: 415px;
background: ${({ theme }) => theme.withe_background} ;
display: flex ;
flex-direction: column ;
transition: all ease 0.5s ;
`;

export const Header = styled.div`
display: flex ;
background-color: #00BFA5 ;
align-items: center ;
padding: 60px 15px 15px 15px ;

`;
export const Title = styled.h1`
font-size: 19px;
height: 40px ;
line-height: 40px ;
flex:1 ;
font-weight: bold ;
color: ${({theme}) => theme.white_details} ;
margin-left: 20px ;
`;
export const NewChatList = styled.div`
flex: 1;
overflow-y: auto ;
`;

export const NewChatItem = styled.div`
    display: flex ;
    align-items: center ;
    padding: 15px ;
    cursor: pointer;
    :hover{
        background-color: #F5F5F5 ;
    }
`;
    export const UserImage = styled.img`
    width:50px ;
    height:50px ;
    border-radius: 50% ;
    margin-right: 15px ;
    `;
    export const UserName = styled.span`
    font-size: 17px ;
    color: #000;
    `;