import React from 'react'
import "./ErrorCargar.css"

const error = () => {

  setTimeout(() => {
    window.alert("No diste acceso a la ubicacion, recarga y corrige");
  }, 1000);

  return (
    <div className='errorUbicacion'>
      <div className='contentError'>
        <h1>:( </h1>
        <p>No se pudo acceder a la ubicación.
        </p>
        <p>Posibles soluciones:</p>
        <ul>
          <li>Recarga la pagina</li>
          <li>Revisa tu configuracion de ubicacion</li>
        </ul>

      </div>
      
    </div>
  )
}

export default error
