import Modal from 'react-modal';
import { IPropsStateModal } from '../../iterfaces';

const ModalEditPost = ({modalIsOpen, setIsOpen}: IPropsStateModal) => {

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <span>teste =)</span>
      </Modal>
    </>
  )
};

export default ModalEditPost;