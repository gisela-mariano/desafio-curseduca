import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import {v4 as uuid} from "uuid"

import { INewPost } from "../../iterfaces";
import ModalEditPost from '../modalEditPost';
import { StyleContainer } from './style';


const Post = ({username, posts, getPosts}: INewPost) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentPostId, setCurrentPostId] = useState('');

  const handleOpen = (event: EventTarget & HTMLDivElement) => {

    setCurrentPostId(event.id)

    setIsOpen(true)
  }

  return (
    <>
      {
        posts.map((post) => {
          return (
            <StyleContainer key={uuid()}>
              <div className="cont-cabecalho">
                <span>{username}</span>

                <div className="cont-edit-post" id={post.id} onClick={(e) => handleOpen(e.currentTarget)}>
                  <span>Editar</span>

                  <FiSettings/>
                </div>
              </div>

              <p>{post.post}</p>

              <ModalEditPost modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} id_post={currentPostId} getPosts={getPosts}/>
            </StyleContainer>
          )
        })
      }
    </>
  )
};

export default Post;