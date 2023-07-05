import React from 'react'
import './index.css';

export default function Cabecalho(props) {
  return (
        <>
        <div className='cabelhoTotal'>
          <h1>Site</h1>
          <ul className='navBar'>
            <li><a href="">Home</a></li>
            <li><a href="">Contato</a></li>
            <li><a href="">Sobre nós</a></li>
          </ul>
        </div>
        </>    
  )
}
