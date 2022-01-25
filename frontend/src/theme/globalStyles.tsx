import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    html,body,#root{
        width:100%;
        height:100vh;
    }
`;
