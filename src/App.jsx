import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import { produtos } from './data/produtos';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState("inicio");

  function trocarPagina(novaPagina) {
    setPaginaAtual(novaPagina);
  }

  return (
    <div>
      {paginaAtual !== "inicio" && (
        <Header mudarPagina={trocarPagina} />
      )}

      <main className="mainContainer">
        
        {paginaAtual === "inicio" && (
          <Inicio mudarParaCardapio={() => trocarPagina("cardapio")} />
        )}

        {paginaAtual === "sobre" && (
          <Sobre />
        )}

        {paginaAtual === "cardapio" && (
          <div>
            <h2 className="tituloCardapio">Nosso Cardápio</h2>
            <div className="cardsContainer">
              <Card produto={produtos[0]} />
              <Card produto={produtos[1]} />
              <Card produto={produtos[2]} />
              <Card produto={produtos[3]} />
              <Card produto={produtos[4]} />
              <Card produto={produtos[5]} />
              <Card produto={produtos[6]} />
              <Card produto={produtos[7]} />
              <Card produto={produtos[8]} />
              <Card produto={produtos[9]} />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;