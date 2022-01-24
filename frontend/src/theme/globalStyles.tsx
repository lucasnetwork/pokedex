import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box
    }

    html,body,#root{
        width:100vw;
        height:100vh;
    }
`;
