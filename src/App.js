import React, { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMRzR49SKfXODkePajeGCAzVus_XbSRpeBA&usqp=CAU",
  },
  scissors: {
    name: "Scissors",
    img: "https://imageengine.victorinox.com/mediahub/31970/640Wx560H/CUT_8_0904_10__S1.jpg",
  },
  paper: {
    name: "Paper",
    img:""
  }
}

function App() {
  return (
    <div>
      <div className="main">
        <Box title="You" />      
        <Box title="Computer" />      
      </div>

      <div className="main">
          <button>가위</button>
          <button>바위</button>
          <button>보</button>
      </div>
    </div>
  );
}

export default App;
