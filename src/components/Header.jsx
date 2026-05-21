import React from 'react';
import './Header.css';
import logoImg from '../assets/logo.png';

function Header(props) {
  return (
    <header className="headerContainer">
      <div className="logoArea">
        <img src={logoImg} alt="Logo P.R.I.M.O.S" className="logoImagem" />
        
        <div>
          <h1 className="logoTitulo">P.R.I.M.O.S</h1>
          <p className="logoSubtitulo">A Melhor Pastelaria</p>
        </div>
      </div>

      <nav className="navMenu">
        <a className="navLink" style={{ cursor: 'pointer' }} onClick={() => props.mudarPagina("inicio")}>
          Início
        </a>
        <a className="navLink" style={{ cursor: 'pointer' }} onClick={() => props.mudarPagina("cardapio")}>
          Cardápio
        </a>
        <a className="navLink" style={{ cursor: 'pointer' }} onClick={() => props.mudarPagina("sobre")}>
          Sobre Nós
        </a>
      </nav>

      <div className="buscaContainer">
        <input 
          type="text" 
          placeholder="Qual pastel você deseja?" 
          className="buscaInput"
          value={props.termoBusca}
          onChange={(e) => props.setTermoBusca(e.target.value)}
        />
        <button className="buscaBotao">🔍</button>
      </div>
    </header>
  );
}

export default Header;