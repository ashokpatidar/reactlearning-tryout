import React, { useState } from "react";
import Modal from "react-modal";

function ModalComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggelModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={toggelModal}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            backgroundColor: "orange",
          },
        }}
      >
        <h2>Modal title</h2>
        <h3>Modal Content</h3>
        <button onClick={toggelModal}>close</button>
      </Modal>
      <button onClick={toggelModal}>openModal</button>
    </>
  );
}

export default ModalComponent;
