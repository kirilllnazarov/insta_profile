import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    @font-face {
    font-family: 'SF Pro Display';
    src: url('../assets/fonts/SFProDisplay-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SF Pro Display';
    src: url('../assets/fonts/SFProDisplay-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'SF Pro Display';
    src: url('../assets/fonts/SFProDisplay-Semibold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;

}
    body {
    margin: 0;
    font-family: 'SF Pro Display', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.primaryFont};
    font-size: 13px;
    font-weight: 400;
}

    

`;
