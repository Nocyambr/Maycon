import React from 'react';
import nos from '../assets/nos.png';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobreContainer"> 
      <h2 className="sobreTitulo">Sobre a P.R.I.M.O.S</h2>
      <p className="sobreTexto">
        A P.R.I.M.O.S nasceu do sonho de fazer o melhor pastel da cidade. 
        Nossa massa é uma receita secreta de família, sempre frita na hora para garantir aquela crocância perfeita!
      </p>
      <img src={nos} alt="Foto dos integrantes" className='nos'/>
    </div>
  );
}

export default Sobre;