import styled from "styled-components";

export const Container = styled.div`
width: 900px ;
display: flex ;
flex-direction: column ;
`;

export const Header = styled.div`
height: 70px ;
background: ${({ theme }) => theme.gray_background} ;
display: flex ;
align-items: center ;
justify-content: flex-start ;

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
padding-left: 250px ;
display: flex ;
align-items: center ;
justify-content: center;

`;

export const Video = styled.img`
    cursor: pointer;
 margin-left:40px ;
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
width: 100% ;
height: 100%;
position: relative ;

`;

export const FooterContainer = styled.div`
height: 70px ;
padding: 22px 17px ;
background: ${({ theme }) => theme.gray_background} ;
display: flex ;
align-items: center ;
`;
    export const Emoticon = styled.img`
    `;
    export const Files = styled.img`
    margin-left: 20px ;
    `;
    export const Mic = styled.img`
        margin-left: 40px ;
    `;