import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box ;
    }

    html{
        font-size: 62.5% ;
    }

    body{
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
        'Open Sans', 'Helvetica Neue', sans-serif
    }

    h1, h2, p{
        margin: 0;
    }

    a{
        text-decoration: none;
    }

    ul, li{
        list-style: none;
    }

    input,button {
        border: none;
        background-color: transparent;
    }
`
export default GlobalStyles
