import { useEffect, useRef, useState } from 'react';
import './Card.css';

function Card(props) {
  const produto = props.produto;
  const cardRef = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const cardAtual = cardRef.current;

    if (!cardAtual) return undefined;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.unobserve(entrada.target);
        }
      },
      { threshold: 0.2 }
    );

    observador.observe(cardAtual);

    return () => observador.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`cardContainer ${visivel ? 'cardVisivel' : ''}`}>
      <img className="cardImagem"
        src={produto.imagem} 
        alt={produto.nome} 
      />
      <h3 className="cardTitulo">{produto.nome}</h3>
      <p className="cardDescricao">{produto.descricao}</p>
      
      <h3 className="cardPreco" style={{ color: '#2e7d32', margin: '10px 0' }}>
        {produto.preco}
      </h3>
      
      <button className="comprar" onClick={props.aoComprar}>
        Comprar
      </button>
    </div>
  );
}

export default Card;