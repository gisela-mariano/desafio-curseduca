import { useState } from 'react';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import { IPropsStateModal } from '../../iterfaces';
import { apiAccess } from '../../services';
import { StyleContainer } from './style';

const ModalEditPost = ({modalIsOpen, setIsOpen, id_post, getPosts}: IPropsStateModal) => {

  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  const userData = localStorage.getItem('userData');
  const token = JSON.parse(userData!).token;

  const closeModal = () => {
    setIsOpen(false);
  }
  
  const handleGetValue = (value: string) => {

    setCount(value.length);
    setValue(value)
  }

  const handleEditPost = () => {

    if(value.length < 3){

      return toast.error("O post deve ter pelo menos 3 letras.")
    }

    const editedPost = {
      post: value
    }

    apiAccess
      .patch(`/posts/${id_post}`, JSON.stringify(editedPost), {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((_) => {
        toast.success("Post editado com sucesso!")
        getPosts()
        closeModal()
      })
      .catch((_) => toast.error("Você não tem permissão para editar esse post."))
  }

  const handleDeletePost = () => {

    apiAccess
      .delete(`/posts/${id_post}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((_) => toast.success("Post deletado com sucesso!"))
      .catch((_) => toast.error("Você não tem permissão para deletar esse post."))
  }

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <StyleContainer>
          <h3>Editar Post</h3>

          <div className="cont-textarea">

            <textarea name="newPost" maxLength={300} placeholder="Escreva seu texto aqui" onChange={(e) => handleGetValue(e.target.value)}/>

            <span>{count}/300</span>
          </div>

          <div className='cont-buttons'>
            <button onClick={() => handleEditPost()}>Editar</button>
            <button onClick={() => handleDeletePost()}>Deletar</button>
            <button onClick={() => closeModal()}>Cancelar</button>
          </div>
        </StyleContainer>
      </ReactModal>
    </>
  )
};

export default ModalEditPost;