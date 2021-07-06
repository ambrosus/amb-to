/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {ModalContext} from '../../utils/modalContext';

const Modal = () => {
  const {modalContent, handleModal, modal, setModalContent} = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div className='table__gallery-scale'>
        <div className='table__gallery-wrap'>
          <p>{modalContent}</p>
        </div>
        <div className='table__gallery-bg' onClick={() => {
          setModalContent(null);
          handleModal();
        }}/>
      </div>,
      document.querySelector('#modal-root') as Element
    );
  }
  return null;
};

export default Modal;
