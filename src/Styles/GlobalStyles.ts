import { createGlobalStyle } from "styled-components";
import { theme } from '../Themes/Theme';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: ${theme.fonts.family};
    }

    html {
        background: ${theme.colors.white};
    }
`;