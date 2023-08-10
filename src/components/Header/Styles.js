import styled from 'styled-components'

export const Container = styled.header`
    width: 100vw;
    height: 13vh;
    font-size: 5vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Signika Negative', sans-serif;

    .logo{
        width: 19rem;
        height: 5rem;

        @media screen and (max-device-width: 460px){
            width: 65vw;
            height: auto;
        }
    }

    .icon-cart {
        filter: invert(100%);
        width: auto;
        height: auto;

        @media screen and (max-device-width: 1024px){
            width: 1.7rem;
        }

        @media screen and (max-device-width: 768px){
            width: 1.5rem;
        }

        @media screen and (max-device-width: 460px){
            width: 6.5vw;
            height: 5vh;
        }
    }

    .cartQuantity {
        display: flex;
        position: fixed;
        top: 3.5%;
        right: 2%;
        background: rgba(22, 24, 55, 0.9);
        padding: 10px 7px 6px 12px;
        border-radius: 10%;
        border: 1px solid white;

        @media screen and (max-device-width: 1024px){
            padding: 8px 8px 1px 10px; 
        }

        @media screen and (max-device-width: 768px) {
            padding: 6px 8px 1px 10px; 
        }

        @media screen and (max-device-width: 460px){
            padding: 1.1vw 1.5vw 0vw 1.8vw;
        }
    }  

    .cartLength {
        font-size: 0.7rem;
        background-color: #8606fe;
        color: #fff;
        font-weight: bold;
        border-radius: 10%;
        top: 0;
        width: 18px;
        height: 17px;
        right: -10px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (max-device-width: 1024px){
            font-size: 0.7rem;
            width: 17px;
            height: 15px;
        }

        @media screen and (max-device-width: 768px){
            font-size: 0.7rem;
            width: 15px;
            height: 12px;
            padding: 6%;
        }

        @media screen and (max-device-width: 460px){
            font-size: 2.1vw;
            width: 40%;
            height: 40%;
            padding-right: 2px;
        }
    }
`;



