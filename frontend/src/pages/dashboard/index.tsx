import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/imgs/Icon-logo.svg"
import Post from "../../components/post";
import { IUserPosts } from "../../iterfaces";
import { apiAccess } from "../../services";
import { StyleContainer } from "./style";
import loading from "../../assets/imgs/git-loading.gif"

const Dashboard = () => {

  const history = useHistory();

  if(!!JSON.parse(localStorage.getItem('userData')!) === false){

    history.push('/')
  }

  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [posts, setPosts] = useState<IUserPosts[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const userData = localStorage.getItem('userData');
  const token = JSON.parse(userData!).token;

  const getPosts = useCallback(() => {

    setIsLoading(true)

    apiAccess
      .get("/posts", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => setPosts(res.data.data))
      .catch((err) => err)

    setIsLoading(false)

  }, [token])

  const handleLogout = () => {

    localStorage.removeItem('userData');

    history.push('/')
  }

  useEffect(() => {
    getPosts()
  }, [getPosts])

  const handleGetValue = (value: string) => {

    setCount(value.length)
    setValue(value)
  }

  const handlePost = () => {

    if(value.length < 3){

      return toast.error("O post deve ter pelo menos 3 letras.")
    }

    const newPost = {
      post: value
    }

    apiAccess
      .post("/posts", JSON.stringify(newPost), {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((_) => {
        toast.success("Post criado com sucesso!");

        setValue('')
      })
      .catch((err) => err)

      getPosts()
  }

  return (
    <>
      <StyleContainer>
        <header>
          <div className="cont-header">
            <img src={logo} alt="Ícone logomarca Curseduca" />

          <button onClick={() => handleLogout()}>Sair</button>
          </div>
        </header>

        <main>
          <div className="cont-content">
            <div className="cont-new-post">
              <h1>Publique Algo:</h1>

              <div className="cont-textarea">

                <textarea value={value} maxLength={300} placeholder="Escreva seu texto aqui" onChange={(e) => handleGetValue(e.target.value)}/>

                <div className="cont-infos-textarea">
                  <button onClick={() => handlePost()}>Postar</button>
                  <span>{count}/300</span>
                </div>
              </div>
            </div>

            <div className="posts">

              {
                isLoading ?
                <div className="loading">
                  <img src={loading} alt="Animação carregamento" />
                </div>
                :
                posts.map((post, index) => {
                  return <Post key={index} username={post.name} posts={post.posts} getPosts={getPosts}/>
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