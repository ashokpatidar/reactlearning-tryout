import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FaRegClock, FaAmazon } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import ModalComponent from "./ModalComponent";

toast.configure();
function App() {
  const notify = () => {
    toast.success("Hey Toast i am here!!!");
  };

  return (
    <div className="App">
      <ToastContainer />
      <IconContext.Provider value={{ color: "blue", size: "30rem" }}>
        <FaRegClock color="purple" size="10rem" />
        <FaAmazon color="orange" size="20rem" />
        <FaAngellist />
      </IconContext.Provider>

      <button onClick={notify}>Toast Notification</button>
      <Tippy content='basic tooltip'>
      <button>hover</button>
      </Tippy>
      <ModalComponent />
    </div>
  );
}

export default App;
