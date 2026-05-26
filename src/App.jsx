import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import { produtos } from './data/produtos';
import Banner from './components/Banner';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import frangosafado from './assets/frangosafado.png';
import './App.css';

function App() {
  const [paginaAtual, setPaginaAtual] = useState("inicio");
  const [termoBusca, setTermoBusca] = useState("");
  const [produtoEmCompra, setProdutoEmCompra] = useState(null);

  function trocarPagina(novaPagina) {
    setPaginaAtual(novaPagina);
    setTermoBusca("");
  }

  const baseFiltrada = produtos.filter((pastel) => 
    pastel.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const produtosFiltrados = termoBusca.toLowerCase().trim() === "frango safado"
    ? [
        {
          nome: "🐔 Frango Safado",
          preco: "R$ ???? (Secreto)",
          descricao: "O lendário recheio proibido que não está no cardápio tradicional! Frango ultra desfiado, catupiry transbordando e o tempero misterioso que a banca tentou esconder.",
          imagem: frangosafado
        }
      ]
    : baseFiltrada;

  return (
    <div>
      <Checkout 
        produto={produtoEmCompra} 
        fechar={() => setProdutoEmCompra(null)} 
        irParaInicio={() => {
          setProdutoEmCompra(null);
          trocarPagina("inicio");
        }}
      />

      {paginaAtual !== "inicio" && (
        <Header 
          mudarPagina={trocarPagina} 
          termoBusca={termoBusca}
          setTermoBusca={setTermoBusca}
        />
      )}
      
      <main className={`mainContainer ${paginaAtual !== "inicio" ? "anima-fade" : ""}`} key={paginaAtual}>
        
        {paginaAtual === "inicio" && (
          <Inicio mudarParaCardapio={() => trocarPagina("cardapio")} />
        )}

        {paginaAtual === "sobre" && (
          <Sobre />
        )}

        {paginaAtual === "cardapio" && (
          <div>
            <Banner aoClicar={setProdutoEmCompra} />
            
            <h2 className="tituloCardapio">Nosso Cardápio</h2>
            <div className="cardsContainer">
              
              {produtosFiltrados.length > 0 ? (
                produtosFiltrados.map((item, index) => (
                  <Card 
                    key={index} 
                    produto={item} 
                    aoComprar={() => setProdutoEmCompra(item)} 
                  />
                ))
              ) : (
                <p style={{ textAlign: 'center', width: '100%', fontSize: '18px', color: '#555' }}>
                  Nenhum pastel encontrado com esse nome! 😢
                </p>
              )}

            </div>
          </div>
        )}

      </main>
<<<<<<< HEAD
      {(paginaAtual === "cardapio" || paginaAtual === "sobre") && <Footer />}
=======
      <Footer />
>>>>>>> ac817e4211dc6ce14d58604b3b473b390c04cc6c
    </div>
  );
}

export default App;