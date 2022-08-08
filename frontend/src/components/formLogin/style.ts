import styled from "styled-components"

export const StyleContainer = styled.div`

  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 580px;

  padding: 15px;

  background-color: white;

  border: 2px solid var(--blue);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  box-sizing: border-box;

  h2{
    color: var(--blue);

    font-weight: bold;
    font-size: 1.5rem;
  }

  form{
    height: 80%;
    width: 100%;

    .cont-buttons{
      width: 100%;
      height: 100px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      button{
        width: 100%;
        height: 42px;

        font-weight: bold;

        border: none;
        border-radius: 20px;

        background-color: var(--blue);
        color: white;

        :last-child{
          background-color: var(--yellow);
        }
      }
    }
  }

  @media screen and (max-width: 650px){
    width: 85%;
    height: 85%;
  }
`