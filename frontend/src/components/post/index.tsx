import { FiSettings } from 'react-icons/fi';

import { INewPost } from "../../iterfaces";
import { StyleContainer } from './style';


const Post = ({username, post, id_user, id_post}: INewPost) => {

  return (
    <>
      <StyleContainer>
        <div className="cont-cabecalho">
          <span>{username}</span>

          <div className="cont-edit-post">
            <span>Editar</span>

            <FiSettings/>
          </div>
        </div>
        
        <p>{post}</p>
      </StyleContainer>
    </>
  )
};

export default Post;