import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Loginsignup from './Pages/Loginsignup';
import Container from 'react-bootstrap/esm/Container';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Container>
        <Loginsignup />
      </Container>
        
    </div>
  );
}

export default App;
