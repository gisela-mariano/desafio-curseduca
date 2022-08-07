import styled, { css } from "styled-components"
import { IPropsInput } from "../../iterfaces"

export const StyleContainer = styled.div<IPropsInput>`

  width: 100%;
  height: 90px;

  margin-bottom: 15px;

  box-sizing: border-box;

  @media screen and (max-width: 550px) {

    .label{
      color: var(--blue);

      max-height: 36px;
    }

    .input{
      width: 100%;
      height: 45px;

      margin-top: 10px;

      border: 2px solid var(--blue);
      border-radius: 20px;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      box-sizing: border-box;

      svg{
        color: var(--blue);
      }

      input{
        width: 80%;
        height: 90%;

        padding-left: 6px;

        background-color: transparent;

        border: none;
        border-radius: 15px;

        box-sizing: border-box;

        outline: none;

        ::placeholder{
          color: var(--gray);
        }
      }
    }

    ${
      props => props.isErrored && css`

        .input{
          border-color: var(--red);
          
          svg{
            color: var(--red);
          }
        }
      `
    }
  }
`