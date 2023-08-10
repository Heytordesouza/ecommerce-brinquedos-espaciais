import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  justify-items: center;
  height: max-content;

  @media screen and (max-device-width: 768px) {
      flex-direction: column;
      text-align: center;
   }
`;

// export const Main = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 76vw;
//     min-height: 77vh;
// `;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* width: 100%; */
    width: 76vw;
    min-height: 77vh;
    gap: 1vw;
    margin-top: 0 auto;
    margin-bottom: 2vh;
    justify-content: center;

    @media screen and (max-device-width: 768px){
      width: 100vw;
      justify-content: center;
    }
`;

export const Cards = styled.div`
   display: flex;
   flex-direction: column;
   width: 13.5rem;
   height: 17.5rem;
   background: rgba(255, 255, 255, 0.9);
   border-radius: 15px;
   color: black;
   border: 1px solid black;
   align-items: center;
   gap: 0px;

   &:hover {
      background-color: white
   }

   .imagemProduto{
      width: 10.5rem;
      height: 10.5rem;
      margin-top: 10px;
      &:hover{
         transition: all .2s ease-in-out; 
         transform: scale(1.1); 
      }
   }

   @media screen and (max-device-width: 460px){
      width: 45%;
      height: inherit;

      .imagemProduto{
         width: 80%;
         height: 100%;
      }
    }
`

export const Nome = styled.div`
   font-family: 'Signika Negative', sans-serif;
   font-weight: bold;
   display: flex;
   flex-direction: column;
   text-align: center;
   align-items: center;
   width: 90%;
   justify-content: space-between;
   margin-top: 0.65rem;
   font-size: 0.8rem;
   height: 8rem;

   @media screen and (max-device-width: 460px){
      font-size: 3vw;
      height: 15%;
   }
`

export const EndCard = styled.div`
   display: flex;
   flex-direction: row;
   width: 12.5rem;
   height: 10rem;
   justify-content: space-between;
   align-items: center;
   gap: 2rem;

   @media screen and (max-device-width: 460px){
      width: 85%;
      gap: 20%;
      height: 16%;
      margin: 8% 0 2% 0;
   }
`

export const Value = styled.div`
   font-family: 'Signika Negative', sans-serif;
   font-weight: bold;
   font-size: 1.1rem;
   margin-left: 15px;

   @media screen and (max-device-width: 460px){
      margin-left: 3%;
      font-size: 3.65vw;
   }
`

export const Button = styled.button`
   font-family: 'Signika Negative', sans-serif;
   width: 2.5rem;
   height: 2.3rem;
   border-radius: 5px;
   margin-bottom: 5px;
   
   background-color: #161837;
   color: white;
   cursor: pointer;

   .icon-cart{
      filter: invert(100%);
      width: auto;
      height: auto;
      max-width: 70%;
      margin: 5px 1px 0 0;
   }

   &:hover {
    background-color: #07dfff;
    color: black;
  }
  &:active {
    background-color: #261fff;
    color: white;
  }

  @media screen and (max-device-width: 460px){
      width: 25%;
      height: 95%;
   }
`

