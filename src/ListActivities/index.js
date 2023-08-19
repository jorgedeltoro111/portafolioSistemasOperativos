import React from 'react';
import './index.css';
function ListActivities(props) {
  return (
    <div>  
      <ul className='mt-4 mr-5  list-group-horizontal text-center '>
        <li className='mr-5 ml-2 list-unstyled '>
          <h3 className='info font-italic'>Información</h3>
          <h5>Seminario de solución de problemas de uso, adaptación, explotación de sistemas operativos</h5>
          <p className='font-weight-bold'>Mtra.Becerra Velázquez Violeta del Rocío</p>
          <p>Jorge Enrique Hernández Del Toro</p>
          <p>
            Portafolio de actividades listadas con su titulo y número de actividad correspondiente, agregando una simple descripción de la actividad y la liga para visualizar el trabajo completo.
          </p>
        </li>
        <li className='lista list-group-item'>{props.children}</li>
      </ul>
    </div>
  );
}

export {ListActivities};
