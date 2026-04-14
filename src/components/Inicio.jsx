import React from 'react';
import './Inicio.css';
import logoImg from '../assets/logo.png';

function Inicio(props) {
  return (
    <div className="inicioContainer">
      <img src={logoImg} alt="Logo P.R.I.M.O.S" className="inicioLogo" />
      
      <button className="inicioBotao" onClick={props.mudarParaCardapio}>
        Ver nosso Cardápio
      </button>
    </div>
  );
}

export default Inicio;