import styled from 'styled-components'

export const A = styled.div`
   min-height: 78vh;
`

export const Container = styled.div`
   min-height: 100%;
   justify-content: flex-start;
   align-items: center;
   margin-top: 2%;
   margin-left: 20%;
   display: flex;
   flex-direction: column;
   gap: 1.5vh;
   padding: 10px;
   width: 60%;
   margin-right: 10px;
   color: white;
   background: rgba(22, 24, 55, 0.9);
   border-radius: 30px;
   font-family: 'Signika Negative', sans-serif;
   margin-bottom: 2vh;

   @media screen and (max-device-width: 768px) {
      width: 80%;
      margin-left: 9%;
   }

   @media screen and (max-device-width: 460px) {
      width: 90%;
      margin-left: 2.6%;
   }
`;

export const Title = styled.h2`
   display: flex;
   width: 25%;
   justify-content: center;
   align-items: center;
   font-size: 1.7vw;
   margin-bottom: 1%;
   margin-top: 1%;
   gap: 7%;

   .carrinhoImg {
      filter: invert(100%);
      width: auto;
      height: auto;
      max-width: 20%;
   };

   @media screen and (max-device-width: 768px) {
      font-size: 2.7vw;
   }

   @media screen and (max-device-width: 460px) {
      width: 35%;
      font-size: 4vw;
   }
`;

export const QtdTotal = styled.span`
   display: flex;
   width: 28%;
   justify-content: center;
   font-size: 1.1vw;
   margin-bottom: 1.5%;

   @media screen and (max-device-width: 768px) {
      font-size: 2vw;
   }

   @media screen and (max-device-width: 460px) {
      width: 38%;
      font-size: 3vw;
   }
`;

export const Product = styled.div`
   border: 1px solid #000;
   display: flex;
   justify-content: space-between;
   width: 85%;
   height: 15%;
   background: white;
   color: black;
   align-items: center;
   border-radius: 8px;

   .imgProduto {
      width: 12%;
      height: 75%;
      padding: 1%;
      margin-left: 2%;

      @media screen and (max-device-width: 768px){
         width: 13%;
         height: 76%;
         margin-left: 0%;
      }

      @media screen and (max-device-width: 460px){
         width: 15%;
         height: 79%;
         margin-left: 0%;
      }
   };

   @media screen and (max-device-width: 768px) {
      width: 95%;
      height: 12%;
   }

   @media screen and (max-device-width: 460px) {
      width: 100%;
   }
`;

export const FirstLine = styled.div`
   display: flex;
   margin-left: 2%;
   width: 40%;
   gap: 0.4vw;

   @media screen and (max-device-width: 768px) {
      width: 45%;
   }

   @media screen and (max-device-width: 460px) {
      width: 50%;
      margin-left: 0.5%;
      
   }
`;

export const Buttons = styled.div`
   width: 50%;
   display: flex;
   gap: 0.8vw;
   justify-content: center;
   align-items: center;

   @media screen and (max-device-width: 768px) {
      width: 40%;
   }

   @media screen and (max-device-width: 460px) {
      width: 82%;
   }
`;

export const ButtonMenos = styled.button`
   width: 30%;
   height: 65%;
   font-size: 1.1vw;
   border-radius: 20%;
   border: none;
   cursor: pointer;

   &:hover {
      background-color: rgba(255, 81, 55, 0.6)
   };

   &:active {
      background-color: rgba(248, 32, 0, 0.8)
   };

   @media screen and (max-device-width: 768px){
      font-size: 1.9vw;
      height: 78%;
   }

   @media screen and (max-device-width: 460px){
      font-size: 5vw;
      height: 100%;
   }
`;

export const Qtd = styled.div`
   font-weight: bold;
   font-size: 1.3vw;
   width: 29%;
   text-align: center;

   @media screen and (max-device-width: 768px){
      font-size: 2vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 3vw;
      width: 40%;
   }
`;

export const ButtonMais = styled.button`
   width: 30%;
   height: 65%;
   font-size: 1vw;
   justify-content: center;
   text-align: center;
   align-content: center;
   border: none;
   border-radius: 20%;
   cursor: pointer;

   &:hover {
      background-color: #4dff4d
   };

   &:active {
      background-color: #00db00
   };

   @media screen and (max-device-width: 768px){
      font-size: 1.9vw;
      height: 78%;
   }

   @media screen and (max-device-width: 460px){
      font-size: 5vw;
      height: 100%;
   }
   
`;

export const Value = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 3%;
   height: 50%;
   width: 55%;
   gap: 5px;

   @media screen and (max-device-width: 460px){
      width: 95%;
   }
`;

export const ValueSingle = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 0.8vw;

   @media screen and (max-device-width: 768px){
      font-size: 1.6vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 2.5vw;
   }
`;

export const ValueTotal = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.4vw;
   font-weight: bold;

   @media screen and (max-device-width: 768px){
      font-size: 2.3vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 3.7vw;
   }
`;

export const Name = styled.div`
   font-size: 1.1vw;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   width: 15vw;
   font-weight: bold;

   @media screen and (max-device-width: 768px){
      font-size: 1.7vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 2.5vw;
      width: 19vw;
   }
`;

export const ButtonRemove = styled.button`
   height: 30%;
   width: 5%;
   justify-content: center;
   margin-right: 2%;
   border-radius: 15%;
   padding-left: 1px;
   border: none;
   background-color: white;
   cursor: pointer;
   

   .lixeira {
      height: 88%;
      width: 95%;
      padding: 4.8px 1px 1.5px 3px;
      
   };

   &:hover{
      background-color: rgba(255, 81, 55, 0.6)
   };

   &:active{
      background-color: rgba(248, 32, 0, 0.8)
   };

   @media screen and (max-device-width: 768px){
      height: 31%;
      width: 6%;
   }

   @media screen and (max-device-width: 460px){
      height: 32%;
      width: 7%;
      margin-right: 0%;
      padding-left: 0px;
   }
`;

export const LineEnd = styled.div`
   display: flex;
   width: 75%;
   flex-direction: column;
   height: 4vw;
   margin-top: 1%;
   justify-content: center;
   align-items: center;

   @media screen and (max-device-width: 768px) {
      width: 80%;
   }

   @media screen and (max-device-width: 460px){
      width: 90%;
      margin-top: 3%;
   }
`;

export const Cep = styled.div`
   display: flex;
   justify-content: center;
`;

export const Input = styled.input`
   display: flex;
   font-size: 1vw;
   width: 90%;
   border-radius: 7px;
   text-align: center;
   height: 2vw;

   @media screen and (max-device-width: 768px){
      width: 96%;
      height: 2.5vw;
      font-size: 1.5vw;
   } 

   @media screen and (max-device-width: 460px){
      width: 99%;
      height: 6vw;
      font-size: 3.5vw;
      padding-top: 1%;
   } 
`;

export const ButtonCep = styled.div`
   display: flex;
   border-radius: 20%;
   height: 2.3vw;
   cursor: pointer;
   

      .lupa {
         filter: invert(100%);
         height: 2.3vw;
         width: 100%; 

         @media screen and (max-device-width: 768px){
            height: 2.8vw;
         }

         @media screen and (max-device-width: 460px){
            height: 6.6vw;
         }
      };

      &:active {
         background-color: #07dfff;
         color: white;
      };

      &:hover {
         background-color: #07dfff;
      };

      @media screen and (max-device-width: 768px){
         height: 3vw;
         margin-left: 2vw;
         margin-top: 0.3vh;
      }

      @media screen and (max-device-width: 460px){
         height: 6.6vw;
         margin-left: 4vw;
         margin-top: 0.4vh;
      }
`

export const Address = styled.div`
   display: flex;
   width: 97%;
   text-align: center;
   align-items: center;
   background-color: white;
   padding: 2%;
   border-radius: 10px;

   @media screen and (max-device-width: 768px){
      width: 100%;
   }
`;

export const Local = styled.div`
   display: flex;
   flex-direction: column;
   width: 53%;
   font-size: 1vw;
   color: black;

   @media screen and (max-device-width: 768px){
      font-size: 1.5vw;
   }

   @media screen and (max-device-width: 460px){
      width: 63%;
      font-size: 2.6vw;
   }
`;

export const City = styled.div`
   width: 32%;
   font-size: 1vw;
   color: black;

   @media screen and (max-device-width: 768px){
      font-size: 1.5vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 2.6vw;
   }
`;

export const Freight = styled.div`
   width: 18%;
   font-size: 1vw;
   display: flex;
   justify-content: flex-end;
   color: green;
   font-weight: bold;

   @media screen and (max-device-width: 768px){
      font-size: 1.5vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 2.6vw;
   }
`;

export const ButtonClose = styled.button`
   border-radius: 15%;
   cursor: pointer;
   border: none;
   display: flex;
   background-color: black;
   justify-content: center;
   align-items: center;
   height: 1.9vw;

      &:hover{
         background-color: rgba(255, 81, 55, 0.6)
      };

      &:active{
         background-color: rgba(248, 32, 0, 0.8)
      };

      .excluir{
         width: 100%;
         height: 1.3vw;
         padding-top: 4%;
         
         @media screen and (max-device-width: 460px){
            height: 4vw;
            padding-top: 0.5%;
         }
      };

      @media screen and (max-device-width: 460px){
         height: 6vw;
      }
`;

export const Total = styled.p`
  font-weight: bold;
  font-size: 1.4vw;
  justify-content: center;
  margin-top: 3%;

  @media screen and (max-device-width: 768px){
      font-size: 2vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 5vw;
   }
`;

export const End = styled.div`
   display: flex;
   gap: 10%;
`;

export const ButtonHome = styled.button`
  width: 8vw;
  background-color: rgba(22, 24, 55, 0.9);
  font-size: 0.9vw;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  border: 1px solid white;
  
  .linkHome {
      text-decoration: none;
      color: white;

      &:active {
         background-color: #07dfff;
         color: white;
      }
  };

   &:hover {
    background-color: #07dfff;
  };

  @media screen and (max-device-width: 768px){
      font-size: 1.6vw;
      width: 12vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 3vw;
      width: 20vw;
   }
`;

export const ButtonEnd = styled.button`
  width: 8vw;
  background-color: rgba(22, 24, 55, 0.9);
  font-size: 0.9vw;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  border: 1px solid white;

   &:hover {
      background-color: #4dff4d;
   };

   &:active {
      background-color: #07dfff;
      color: white;
   };

   @media screen and (max-device-width: 768px){
      font-size: 1.6vw;
      width: 12vw;
   }

   @media screen and (max-device-width: 460px){
      font-size: 3vw;
      width: 20vw;
   }
`;