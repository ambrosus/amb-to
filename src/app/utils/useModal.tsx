import React, {useCallback} from 'react';

export default () => {
  const [modal, setModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);
  const handleModal = useCallback(
    (content = false) => {
      setModal(!modal);
      if (content) {
        setModalContent(content);
      }
    },
    [modalContent]
  );

  return {modal, handleModal, modalContent, setModalContent};
};
