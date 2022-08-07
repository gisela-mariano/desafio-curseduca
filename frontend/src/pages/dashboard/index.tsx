import { useState } from "react";
import logo from "../../assets/imgs/Icon-logo.svg"
import profile from "../../assets/imgs/icon-profile.svg"
import Post from "../../components/post";
import { StyleContainer } from "./style";


const Dashboard = () => {

  const [count, setCount] = useState(0);

  const handleCount = (value: string) => {

    setCount(value.length)
  }

  const username = "Fulano de Tal"
  const post = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt sodales nibh at sodales. Donec eget dui mattis, eleifend felis malesuada, mollis odio. Sed interdum hendrerit metus eget ullamcorper. Phasellus sodales elit eget felis dapibus, nec dictum eros pharetra. Vivamus quis pretium felis. Vivamus quis pretium felis eros eged."
  const id_post = "00"
  const id_user = "00"

  return (
    <>
      <StyleContainer>
        <header>
          <div className="cont-header">
            <img src={logo} alt="Ícone logomarca Curseduca" />

            <div className="cont-user-info">
              <span>Olá, <span>Fulana</span> </span>

              <img src={profile} alt="Ícone perfil" />
            </div>
          </div>
        </header>

        <main>
          <div className="cont-content">
            <div className="cont-new-post">
              <h1>Publique Algo:</h1>

              <div className="cont-textarea">

                <textarea name="newPost" maxLength={300} placeholder="Escreva seu texto aqui" onChange={(e) => handleCount(e.target.value)}/>

                <span>{count}/300</span>
              </div>
            </div>

            <div className="posts">
              <Post username={username} post={post} id_user={id_user} id_post={id_post}/>
            </div>
          </div>
        </main>
      </StyleContainer>
    </>
  )
};


export default Dashboard;