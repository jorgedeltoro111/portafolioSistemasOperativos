import React from 'react';
import './index.css';
function Activity(props) {

  return (
    <div className='d-sm-inline-flex p-3 '>  
      <div className='item list-group-item '>
        <h5 className='text-break'>{props.title}</h5>
        <h6>{props.subtitle}</h6>
        <p className='text-break'>{props.description}</p>
        <button type="button" class="btn btn-success "><a className='link-no-underline text-decoration-none' href={props.link} target="_blank" rel="noreferrer">Ver</a></button>
      </div>
    </div>
  );
}

export {Activity};
