import { useEffect, useState } from "react";
import logo from "../../assets/imgs/Icon-logo.svg"
import profile from "../../assets/imgs/icon-profile.svg"
import Post from "../../components/post";
import { IPost } from "../../iterfaces";
import { apiAccess } from "../../services";
import { StyleContainer } from "./style";


const Dashboard = () => {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState<IPost[]>([])

  const userData = localStorage.getItem('userData');
  const token = JSON.parse(userData!).token;

  const getPosts = () => {

    apiAccess
      .get("/posts", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => handleGetPosts(res.data.data))
      .catch((err) => console.log(err))
  }

  const handleGetPosts = (posts: IPost[]) => {

    setPosts(posts);
  }

  useEffect(() => getPosts())

  const handleGetValue = (value: string) => {

    setCount(value.length)
    setValue(value)
  }

  const handlePost = () => {

    const newPost = {
      post: value
    }

    apiAccess
      .post("/posts", JSON.stringify(newPost), {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  const username = "Fulano de Tal"
  const id_user = "00"

  return (
    <>
      <StyleContainer>
        <header>
          <div className="cont-header">
            <img src={logo} alt="Ícone logomarca Curseduca" />

          <button>Sair</button>

            {/* <div className="cont-user-info">
              <span>Olá, <span>Fulana</span> </span>

              <img src={profile} alt="Ícone perfil" />
            </div> */}
          </div>
        </header>

        <main>
          <div className="cont-content">
            <div className="cont-new-post">
              <h1>Publique Algo:</h1>

              <div className="cont-textarea">

                <textarea name="newPost" maxLength={300} placeholder="Escreva seu texto aqui" onChange={(e) => handleGetValue(e.target.value)}/>

                <div className="cont-infos-textarea">
                  <button onClick={() => handlePost()}>Postar</button>
                  <span>{count}/300</span>
                </div>
              </div>
            </div>

            <div className="posts">
              {/* <Post username={username} post={post} id_user={id_user} id_post={id_post}/> */}

              {
                posts.map((post) => {
                  return <Post key={post.id} username={username} post={post.post} id_user={id_user} id_post={post.id}/>
                })
              }
            </div>
          </div>
        </main>
      </StyleContainer>
    </>
  )
};


export default Dashboard;