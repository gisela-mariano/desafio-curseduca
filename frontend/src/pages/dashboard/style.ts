import styled from "styled-components"

export const StyleContainer = styled.div`

  width: 100%;
  height: 100vh;

  box-sizing: border-box;

  @media screen and (max-width: 550px) {

    header{
      width: 100%;
      height: 90px;

      padding: 10px;

      background-color: var(--blue);

      box-sizing: border-box;

      .cont-header{
        height: 100%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        box-sizing: border-box;

        img{
          height: 45px;
        }

        .cont-user-info{
          display: flex;
          align-items: center;

          span{
            color: white;

            :last-child{
              font-weight: bold;
            }
          }

          img{
            display: none;
          }
        }

      }
    }

    main{
      width: 100%;
      height: 100%;

      box-sizing: border-box;

      .cont-content{
        width: 100%;
        height: 100%;

        padding: 20px 10px 10px;

        background-color: white;

        box-sizing: border-box;

        .cont-new-post{
          width: 100%;

          margin-bottom: 20px;

          h1{
            font-size: 1.3rem;

            margin-bottom: 15px;

            color: var(--blue);
          }

          .cont-textarea{
            width: 290px;
            height: 120px;

            border: 2px solid var(--blue);

            position: relative;

            box-sizing: border-box;

            border-radius: 20px;

            textarea{
              min-width: 286px;
              max-width: 286px;
              max-height: 90px;
              min-height: 90px;
  
              padding: 5px 10px 0 10px;

              border: none;
              border-radius: 20px;

              outline: none;
  
              box-sizing: border-box;
            }
  
            span{
              font-size: 0.8rem;
  
              color: var(--gray);
  
              position: relative;
  
              left: 225px;
              bottom: -2px;
            }
          }

        }
      }

      .posts{
        width: 100%;
        height: 100%;
      }
    }
  }
`