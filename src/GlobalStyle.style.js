import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body,#root{
        margin:0;
        box-sizing:border-box;
        min-height:100vh;
        font-family: 'Roboto', sans-serif;        
        overflow-x:hidden;
    }
    *{
        box-sizing:border-box;
    }
    #root{
        display:flex;
        flex-direction:column;
    }
    :root{
        --orange:#ff5300;
        --light-grey-text:#686868;
        --bg-grey:#e9e9e9;
    }
    ul{
        margin:0;
        padding:0;
    }
    li{
        list-style-type: none;
    }
    img{
        display:block;
        max-width:100%;
    }
    button{
        font-family: 'Roboto', sans-serif;
    }
`;
