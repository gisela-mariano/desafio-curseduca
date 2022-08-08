import styled from "styled-components"

export const StyleContainer = styled.div`

  width: 99%;

  margin-bottom: 20px;
  padding: 10px;

  border: 2px solid var(--yellow);
  border-radius: 20px;

  box-sizing: border-box;

  .cont-cabecalho{
    width: 100%;

    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
      font-size: 1.2rem;
      font-weight: bold;

      color: var(--yellow);
    }

    .cont-edit-post{
      width: 70px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      cursor: pointer;

      span{
        font-size: 1rem;
        font-weight: normal;
      }

      svg{
        color: var(--yellow);
      }
    }
  }

  p{
    color: var(--high-gray);

    text-align: justify;
  }
`