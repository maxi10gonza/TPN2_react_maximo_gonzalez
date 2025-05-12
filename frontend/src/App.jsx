import { useState } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensajeValidacion, setMensajeValidacion] = useState('');
  const [saludo, setSaludo] = useState('');
  const [error, setError] = useState('');

  const handleValidarNombre = async () => {
    setMensajeValidacion('');
    setSaludo('');
    setError('');
    try {
      const respuestaValidacion = await fetch(`http://localhost:3001/validar/${nombre}`);
      const datosValidacion = await respuestaValidacion.json();
      if (datosValidacion.valido) {
        setMensajeValidacion(datosValidacion.mensaje);
        const respuestaSaludo = await fetch(`http://localhost:3001/saludo/${nombre}`);
        const datosSaludo = await respuestaSaludo.json();
        setSaludo(datosSaludo.saludo);
      } else {
        setError(datosValidacion.mensaje);
      }
    } catch (error) {
      console.error('Error en la validación:', error);
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="App">
      <h1>Validador de Nombres</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingrese su nombre"
        />
        <button onClick={handleValidarNombre}>
          Validar Nombre
        </button>
      </div>
      {mensajeValidacion && (
        <p className="validacion-mensaje">{mensajeValidacion}</p>
      )}
      {error && (
        <p className="error-mensaje">{error}</p>
      )}
      {saludo && (
        <div className="saludo-container">
          <h2>{saludo}</h2>
        </div>
      )}
    </div>
  );
}

export default App;