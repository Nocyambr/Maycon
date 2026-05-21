import React from 'react';
import './Inicio.css';
import logoImg from '../assets/logo.png';

function Inicio(props) {
  return (
    <div className="inicioContainer">
      <div className="inicioConteudo">
        <img src={logoImg} alt="Logo P.R.I.M.O.S" className="inicioLogo" />
        
        <h2 className="inicioSlogan">A crocância que você merece!</h2>
        
        <button className="inicioBotao" onClick={props.mudarParaCardapio}>
          Ver Cardápio
        </button>
      </div>
    </div>
  );
}

export default Inicio;