import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  #root, body, html {
    height: 100vh ;
    width: 100%;
  };

  body {
    background: ${({ theme }) => theme.withe_background};
    color: ${({ theme }) => theme.white_details};
  };

body , input , button , textarea {
  font: 400 16px 'Montserrat', sans-serif;
};
h1, h2, h3, h4, h5, h6, span, p{
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  color: ${({theme}) => theme.title};
}

  button {
cursor: pointer;
  };
  a{
    text-decoration: none;
  };
`;
