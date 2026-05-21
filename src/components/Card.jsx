import './Card.css';

function Card(props) {
  const produto = props.produto;

  return (
    <div className="cardContainer">
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