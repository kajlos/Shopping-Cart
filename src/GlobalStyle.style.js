import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body,#root{
        margin:0;
        box-sizing:border-box;
        min-height:100vh;
        font-family: 'Roboto', sans-serif;
    }
    #root{
        display:flex;
        flex-direction:column;
    }
    :root{
        --orange:#ff5300;
    }
`;
