import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './Components/Wrapper';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faTwitter, faFacebook, faEnvelope)

function App() {
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

export default App;
