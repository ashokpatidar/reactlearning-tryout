import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {FaRegClock, FaAmazon} from 'react-icons/fa';
import {FaAngellist} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
 

toast.configure()
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const notify = () => {
    toast.success('Hey Toast i am here!!!')
  }

  const toggelModal = () => {
    setModalIsOpen(!modalIsOpen)
  }
  return (
    <div className="App">
      <ToastContainer/>
      <IconContext.Provider value={{color:'blue', size:'30rem'}}>
        <FaRegClock color='purple' size='10rem'/>
        <FaAmazon color='orange' size='20rem'/>
        <FaAngellist/>
      </IconContext.Provider>
      <Modal 
        isOpen={modalIsOpen} 
        shouldCloseOnOverlayClick={false} 
        onRequestClose={toggelModal}
        style={{
          overlay: {
            backgroundColor: 'gray'
          },
          content: {
            backgroundColor: 'orange'
          }}
        }>
        <h2>Modal title</h2>
        <h3>Modal Content</h3>
        <button onClick={toggelModal}>close</button>
      </Modal>
      <button onClick={toggelModal}>openModal</button>
      <button onClick={notify}>Toast Notification</button>
    </div>
  );
}

export default App;
