import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex ;
flex-direction: column ;
`;

export const Header = styled.div`

height: 70px ;
background: ${({ theme }) => theme.gray_background} ;
display: flex ;
align-items: center ;
justify-content: space-between ;

`;

export const HeaderInfo = styled.div`
display: flex ;
align-items: center ;
justify-content: space-between ;
padding: 16px ;
`;

export const Photo = styled.img`
border-radius: 50%;
`;

export const NameContainer = styled.div`
padding-left: 17px ;
display: flex ;
flex-direction: column ;
align-items: flex-start ;
`;

export const Name = styled.h2`
color: ${({ theme }) => theme.title} ;
font-size: 16px ;
font-weight: 500 ;
line-height: 20px ;
`;

export const LastTime = styled.p`
color: ${({ theme }) => theme.name} ;
font-size: 12px ;
font-weight: 500 ;
line-height: 15px ;
`;

export const IconsContainer = styled.div`
padding-right: 30px ;
display: flex ;
align-items: center ;
justify-content: flex-start;

`;

export const Video = styled.img`
    cursor: pointer;
`;

export const Call = styled.img`
    cursor: pointer;
    margin-left:40px ;
`;

export const SepareteBorder = styled.div`
height: 30px ;
border: 0.5px solid ${({ theme }) => theme.border};
margin-left:40px ;
`;

export const Search = styled.img`
    cursor: pointer;
    margin-left:40px ;
`;

export const Spread = styled.img`
    cursor: pointer;
    margin-left:40px ;
`;

export const ChatContainer = styled.div`
flex: 1;
overflow-y: auto ;
background: #E5DDD5 ;
background-size: cover ;
background-position: center ;
background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
`;

export const FooterContainer = styled.div`
height: 70px ;
padding: 22px 17px ;
background: ${({ theme }) => theme.gray_background} ;
display: flex ;
align-items: center ;
justify-content: flex-start ;
`;
    export const Emoticon = styled.img`
    `;
    export const Files = styled.img`
    `;

export const InputMessage = styled.input`
flex: 1;
margin-left: 20px ;
padding: 14px  ;
border-radius: 50px;
font-size: 14px ;
line-height: 17px;
color: ${({theme}) => theme.text} ;
border: none ;
outline: none ;
background: ${({theme}) => theme.withe_background} ;
`;

    export const Mic = styled.img`
    margin-right: 15px ;
    `;