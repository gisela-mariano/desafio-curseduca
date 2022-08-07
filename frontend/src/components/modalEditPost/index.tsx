import { useState } from 'react';
import Modal from 'react-modal';
import { IPropsStateModal } from '../../iterfaces';
import { apiAccess } from '../../services';

const ModalEditPost = ({modalIsOpen, setIsOpen, id_post}: IPropsStateModal) => {

  const [value, setValue] = useState('');

  const userData = localStorage.getItem('userData');
  const token = JSON.parse(userData!).token;

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleEditPost = () => {

    const editedPost = {
      post: value
    }

    apiAccess
      .patch(`/posts/${id_post}`, JSON.stringify(editedPost), {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  const handleDeletePost = () => {

    apiAccess
      .delete(`/posts/${id_post}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h3>Editar Post</h3>

        <input type="text" onChange={(e) => setValue(e.target.value)}/>

        <div className='cont-buttons'>
          <button onClick={() => handleEditPost()}>Editar</button>
          <button onClick={() => handleDeletePost()}>Deletar</button>
        </div>
      </Modal>
    </>
  )
};

export default ModalEditPost;