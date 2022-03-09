import styled from 'styled-components';

export const Container = styled.div`
height: 35px ;
padding: 7px 12px ;
background: ${({theme}) => theme.header} ;
`;

export const Title = styled.h2`
font-size: 16px ;
line-height: 19.5px ;
font-weight: 500 ;
color: ${({theme}) => theme.white_details};
`;