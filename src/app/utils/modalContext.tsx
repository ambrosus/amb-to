import React from 'react';
import useModal from './useModal';
import Modal from '../components/Modal';

let ModalContext;

const {Provider} = (ModalContext = React.createContext({
  modal: false,
  handleModal: () => {},
  modalContent: null,
  setModalContent: {},
}));

const ModalProvider = ({children}) => {
  const {modal, handleModal, modalContent, setModalContent} = useModal();
  return (
    <Provider value={{modal, handleModal, modalContent, setModalContent}}>
      <Modal/>
      {children}
    </Provider>
  );
};

export {ModalContext, ModalProvider};
