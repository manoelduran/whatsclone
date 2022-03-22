import styled from 'styled-components';

export const Container = styled.div`
width: 100% ;
display: flex ;
flex-direction: row ;

`;

export const ChatsContainer = styled.div`
width: 540px ;
height: 100vh ;
background: ${({ theme }) => theme.withe_background} ;
`;

export const MenuContainer = styled.div`
height: 70px ;
padding: 16px 12px ;
background: ${({ theme }) => theme.gray_background} ;
display: flex ;
align-items: center ;
justify-content: space-between ;

`;
export const Photo = styled.img`
border-radius: 50% ;
cursor: pointer;
`;
export const Menu = styled.div`
    width: 179.5px ;
    height: 70px ;
    display: flex ;
align-items: center ;
justify-content: space-between ;
padding-right: 10px;
    `;
export const History = styled.img`
    cursor: pointer;
    `;
export const Plus = styled.img`
    cursor: pointer;
    `;
export const Spread = styled.img`
    cursor: pointer;
    `;

export const BorderHorizontal = styled.div`
width: 540px;
border: 0.5px solid ${({theme}) => theme.border};
`;
export const Border = styled.div`

border: 0.5px solid ${({theme}) => theme.border};
`;


export const MessageContainer = styled.div`
width: 900px ;
display: flex ;
flex-direction: column;
align-items: center ;
margin-top: 100px;
`;
export const WhatsPhoto = styled.img`
`;

export const WhatsAlert = styled.h1`
margin-top: 18px ;
font-size: 35px ;
line-height: 43px ;
`;

export const WhatsMessage = styled.p`
margin-top: 18px ;
font-size: 14px ;
line-height: 20px ;
text-align: center ;
`;

export const Form = styled.form`
button{
    margin-top: 16px;
    width: 100%;
}
`;

export const FormInput = styled.input`

height: 50px;
border: 1px solid ${({theme}) => theme.border};
background: ${({theme}) => theme.withe_background};
border-radius: 8px;
width: 100%;
padding: 0 16px;
`;

export const FormButton = styled.button``;