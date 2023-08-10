import styled from 'styled-components'

export const Container = styled.footer`
    position: relative;
    bottom: 0;
    display: flex;
    width: 100vw;
    height: auto;
    color: white;
    background-color: black;
    padding: 1vh 0 1vh 0;
    align-items: center;
    justify-content: center;
    font-family: 'Signika Negative', sans-serif;
`;

export const FirstColumn = styled.div`
    width: 100vw;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1vh;

    .logo{
        width: 15vw;
        height: max-content;

        @media screen and (max-device-width: 768px) {
            width: 22vw;
        }

        @media screen and (max-device-width: 460px) {
            width: 35vw;
        }
    }
`

export const Name = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .created{
        font-size: 0.7vw;

        @media screen and (max-device-width: 768px){
            font-size: 1vw;
        }

        @media screen and (max-device-width: 460px){
            font-size: 2vw;
        }
    }

    .createdName{
        font-size: 1vw;
        font-weight: bold;

        @media screen and (max-device-width: 768px){
            font-size: 1.3vw;
        }

        @media screen and (max-device-width: 460px){
            font-size: 2.5vw;
        }
    }
`

export const SecondColumn = styled.div`
    display: flex;
    width: 5%;
    font-size: 1vw;

    @media screen and (max-device-width: 768px){
        font-size: 1.3vw;
    }

    @media screen and (max-device-width: 460px){
        font-size: 2.3vw;
    }
`

export const ThirdColumn = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5vh; 
`

export const ImgSocial = styled.a`
    display: flex;
    width: 8%;
    height: 8%;
    gap: 20%;

    .img{
        width: 100%;
        height: 100%;
        border-radius: 15%;  
    }

    .linha{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-device-width: 768px){
        width: 12%;
        height: 12%;
    }

    @media screen and (max-device-width: 460px){
        width: 22%;
        height: 22%;
    }
`