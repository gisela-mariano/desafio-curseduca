import styled from "styled-components"

export const StyleContainer = styled.div`

  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 580px;

  box-sizing: border-box;

  @media screen and (max-width: 550px){
    width: 85%;
    height: 85%;

    background: white;

    padding: 15px;

    border: 2px solid var(--blue);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

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
  }
`