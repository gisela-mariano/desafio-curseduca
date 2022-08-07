import styled from "styled-components"

export const StyleContainer = styled.div`

  width: 100%;
  height: 100vh;

  box-sizing: border-box;

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
        width: 135px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span{
          color: white;

          :last-child{
            font-weight: bold;
          }
        }

        img{
          height: 35px;
        }
      }

    }
  }

  main{
    width: 100%;
    height: 100%;

    box-sizing: border-box;

    display: flex;
    justify-content: center;

    .cont-content{
      width: 60%;
      height: 100%;

      padding: 20px 10px 10px;

      background-color: white;
      box-shadow: 0px 10px 25px 3px rgba(0,0,0,0.33);

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
          width: 100%;
          height: 130px;

          border: 2px solid var(--blue);

          box-sizing: border-box;

          border-radius: 20px;

          display: flex;
          flex-direction: column;

          textarea{
            min-width: 100%;
            max-width: 100%;
            max-height: 90px;
            min-height: 90px;

            padding: 5px 10px 0 10px;

            border: none;
            border-radius: 20px;

            outline: none;

            box-sizing: border-box;
          }

          .cont-infos-textarea{
            width: 100%;

            display: flex;
            justify-content: space-between;

            span{
              font-size: 0.8rem;
  
              margin: 7px 10px 0;
  
              color: var(--gray);
  
              align-self: end;
            }

            button{
              height: 25px;

              margin-left: 10px;

              background-color: var(--yellow);
              color: white;

              border: none;
              border-radius: 10px;
            }
          }

        }

      }
    }

    .posts{
      width: 100%;
      height: 100%;
    }
  }

  @media screen and (max-width: 650px) {

    .cont-user-info{
      max-width: 95px;

      img{
        display: none;
      }
    }

    main{
      .cont-content{
        width: 100%;
        height: 100%;

        padding: 20px 10px 10px;
      }
    }
  }
`