import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';

function App() {
  const [error, setError] = useState('');

  return (
      <Registro error={error} setError={setError} />
  );
}

export default App;
