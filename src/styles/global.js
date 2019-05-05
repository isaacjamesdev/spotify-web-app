import {createGlobalStyle} from 'styled-components';
import 'rc-slider/assets/index.css'

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700");
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, border-style, #root{
        height: 100%;
    }

    body {
        text-rendering: optimizeLegibility;
        background: #181818;
        font-family: 'Montserrat', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
        color: #FFF
    }
`;

export default GlobalStyle;