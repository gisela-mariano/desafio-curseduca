import styled from "styled-components"

export const StyleContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3{
    font-size: 1.5rem;

    color: var(--yellow);
  }

  .cont-textarea{
    width: 100%;
    height: 155px;

    border: 2px solid var(--yellow);
    border-radius: 20px;

    display: flex;
    flex-direction: column;

    textarea{
      min-width: 100%;
      max-width: 100%;
      min-height: 130px;
      max-height: 130px;

      padding: 10px;

      border: none;
      border-radius: 20px;

      outline: none;

      box-sizing: border-box;
    }

    span{
      font-size: 0.8rem;

      margin: 5px 10px 0;

      color: var(--gray);

      align-self: end;
    }
  }

  .cont-buttons{
    width: 100%;
    height: 130px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button{
      height: 35px;

      background-color: var(--blue);
      color: white;

      border: none;
      border-radius: 20px;

      :first-child{
        background-color: var(--yellow);
      }

      :last-child{
        background-color: var(--gray);
      }
    }
  }
`