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
      
      <button className="comprar">
        Comprar
      </button>
    </div>
  );
}

export default Card;