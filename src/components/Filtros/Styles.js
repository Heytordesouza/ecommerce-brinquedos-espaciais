import styled from 'styled-components'

export const Container = styled.form`
    position: sticky;
    top: 15px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: 1vw;
    margin-left: 1vw;
    padding: 0.7em;
    height: 17em;
    width: 12em;
    min-width: 8em;
    color: white;
    background: rgba(22, 24, 55, 0.9);
    border-radius: 15px;
    font-family: 'Signika Negative', sans-serif;

    .main{
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-device-width: 768px) and (min-device-width: 461px) {
        position: relative;
        top: auto;
        left: auto;
        justify-content: center;
        align-items: center;
        width: 65vw;
        height: 28vw;
        padding: 0% 3% 0% 2%;
        margin: 2vh auto 2vh auto;

        .main{
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            gap: 8%;
            
            justify-content: center;
            align-items: center;
            text-align: center;
            
            
        }

        .primeiraColuna{
            width: 40vw;
            height: 100%; 
            align-items: center;
            text-align: center;
            justify-content: center;
            margin-left: 1vw;
            
        }

        .segundaColuna{
            width: 40vw;
            height: 100%;
            
        }
    }
        

    @media screen and (max-device-width: 460px){
        position: relative;
        top: auto;
        left: auto;
        justify-content: center;
        align-items: center;
        width: 90vw;
        height: 40vw;
        padding: 2% 2% 3% 1.2%;
        margin: 0.5vh auto 2vh auto;

        .main{
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            gap: 8%;
            justify-content: center;
            align-items: center;
            text-align: center;
            
        }

        .primeiraColuna{
            width: 40vw;
            height: 90%; 
            align-items: center;
            text-align: center;
            justify-content: center;
            margin-left: 1vw;
        }

        .segundaColuna{
            width: 40vw;
            height: 90%;
        }
    }
`

export const Filter = styled.div`
    height: 3rem;
    font-size: 1.5rem;
    font-weight: bold;

    @media screen and (max-device-width: 768px) and (min-device-width: 461px) {
        font-size: 3.5vw;
        height: 4vh;
        margin-top: 2%;
        margin-bottom: 1%;
    }

    @media screen and (max-device-width: 460px) {
        font-size: 5vw;
        height: 3.2vh;
        margin-top: 2%;
    }
`

// export const Label = styled.label`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     font-size: 1em;
//     font-family: 'Signika Negative', sans-serif;
//     gap: 0.2rem;
//     margin-top: 5px;

//     @media screen and (max-device-width: 768px) and (min-device-width: 461px) {
//         width: 84%;
//         justify-content: flex-end;
//         flex-direction: row;
//         align-items: center;
        
//         margin-top: 0;
//         margin-bottom: 2%;
//         margin-left: 45.5%;
//         font-size: 2.7vw;
//     }

//     @media screen and (max-device-width: 460px){
//         flex-direction: column;
//         width: 40vw;
//         /* margin-top: 2vh; */
//         height: 50%;
//         font-size: 3vw;
//         gap: 0.5vh;
//         margin-left: 0.5vw;
//     }
    
// `

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 6%;
    gap: 2px;

    @media screen and (max-device-width: 768px) and (min-device-width: 461px) {
        flex-direction: column;
        width: 30vw;
        height: 38%;
        font-size: 2.2vw;
        gap: 3px;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-device-width: 460px){
        flex-direction: column;
        width: 40vw;
        height: 45%;
        font-size: 3vw;
        gap: 3px;
        justify-content: center;
        align-items: center;
    }
`

export const Select = styled.select`
    
    width: 98%;
    height: 1.7rem;
    border-radius: 5px;

    @media screen and (max-device-width: 768px) and (min-device-width: 461px) {
        width: 30.5vw;
        height: 100%;
        font-size: 2vw;
        text-align: center;
        justify-content: center;
    }

    @media screen and (max-device-width: 460px){
        width: 39.5vw;
        height: 100%;
        font-size: 3vw;
        text-align: center;
        justify-content: center;
    }
`

export const Input = styled.input`
    width: 95%;
    height: 1.4rem;
    border-radius: 5px;

    @media screen and (max-device-width: 768px) and (min-device-width: 461px) {
        width: 30vw;
        height: 100%;
        font-size: 2vw;
        text-align: center;
    }

    @media screen and (max-device-width: 460px){
        width: 38vw;
        height: 100%;
        font-size: 3vw;
        text-align: center;
    }
`



