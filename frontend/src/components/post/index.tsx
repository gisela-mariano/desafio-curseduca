import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';

import { INewPost } from "../../iterfaces";
import ModalEditPost from '../modalEditPost';
import { StyleContainer } from './style';


const Post = ({username, post, id_user, id_post}: INewPost) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyleContainer>
        <div className="cont-cabecalho">
          <span>{username}</span>

          <div className="cont-edit-post" onClick={() => setIsOpen(true)}>
            <span>Editar</span>

            <FiSettings/>
          </div>
        </div>

        <p>{post}</p>

        <ModalEditPost modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
      </StyleContainer>
    </>
  )
};

export default Post;