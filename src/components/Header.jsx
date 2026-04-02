import React from 'react';
import './Header.css';
import logoImg from '../assets/logo.png';

function Header() {
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
        <a href="#inicio" className="navLink">Início</a>
        <a href="#cardapio" className="navLink">Cardápio</a>
        <a href="#sobre" className="navLink">Sobre Nós</a>
      </nav>

      <div className="buscaContainer">
        <input type="text" placeholder="Buscar pastel..." className="buscaInput"/>
        <button className="buscaBotao">Buscar</button>
      </div>
    </header>
  );
}

export default Header;