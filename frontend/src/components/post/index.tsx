import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';

import { INewPost } from "../../iterfaces";
import { apiAccess } from '../../services';
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

        <ModalEditPost modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} id_post={id_post}/>
      </StyleContainer>
    </>
  )
};

export default Post;