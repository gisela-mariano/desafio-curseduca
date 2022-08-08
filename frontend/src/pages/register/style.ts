import styled from "styled-components"

export const StyleContainer = styled.div`

  width: 100%;
  height: 100vh;

  box-sizing: border-box;

  header{
    width: 100%;
    height: 90px;

    background-color: var(--blue);

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    img{
      height: 50%;
      max-height: 70px;
    }
  }

  main{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
  }
`;