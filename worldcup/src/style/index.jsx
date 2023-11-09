import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
    } 

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    } 

    ol, ul {
        list-style: none;
    }  

    button {
        cursor: pointer;
    }

    body {
        line-height: 1;

        width: 100vw;
        height: 100vh;

        background-image: url("src/assets/orange.jpg");
        background-size: cover;
    }

    #root {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 3.3rem;
    padding: 0.9rem 0;
    text-align: center;
    
    background-color: white;
    font-size: 1.5rem;
    font-weight: 600;
`;

export const Container = styled.main`
    width: 80%;
    height: 75%;
    
    background-color: rgba(255,255,255,0.9);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
`;

export const Stage = styled.section`
    height: 100%;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1.2rem;
`;