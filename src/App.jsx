import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prueba de Sentry en React</h1>
        <h2>Haz click en los botones para lanzar diferentes tipos de errores.</h2>
        <div className="buttons-container">
        <button onClick={() => {throw new Error('El primer boton a fallado!');}}>Prueba 1</button>
        <button onClick={() => {throw new Error("El segundo boton a fallado!");}}>Prueba 2</button>
        <button onClick={() => {throw new Error("El tercer boton a fallado!");}}>Prueba 3</button>

        <button onClick={() => {throw new ReferenceError("Esto es un error de referencia!");}}>Lanzar ReferenceError</button>

        <button onClick={() => {throw new RangeError("Esto es un error de rangos!");}}>Lanzar RangeError</button>

        <h2>Puedes verificar estos errores en tu dashboard de Sentry.</h2>

        </div>
      </header>
    </div>
  );
}

export default App
