import React, { useState, useEffect } from 'react';
import './Checkout.css';

function Checkout({ produto, fechar, irParaInicio }) {
  const [pedidoConcluido, setPedidoConcluido] = useState(false);

  useEffect(() => {
    if (produto) {
      setPedidoConcluido(false);
    }
  }, [produto]);

  if (!produto) return null;

  function handleConfirmar(e) {
    e.preventDefault(); 
    setPedidoConcluido(true); 
  }

  if (pedidoConcluido) {
    return (
      <div className="modalOverlay">
        <div className="modalConteudo" style={{ textAlign: 'center', padding: '60px 40px' }}>
          <div style={{ fontSize: '70px', marginBottom: '20px' }}>🛵💨</div>
          <h1 style={{ color: '#d32f2f', marginBottom: '15px', fontSize: '32px' }}>Obrigado pela compra!</h1>
          <p style={{ color: '#555', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
            Seu pedido de <strong style={{ color: '#2e7d32' }}>{produto.nome}</strong> foi confirmado com sucesso e já está sendo preparado na cozinha. <br/><br/>
            A tradição do pastel de feira está a caminho da sua casa!
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="botaoConfirmar" 
              onClick={fechar}
            >
              Continuar Comprando
            </button>
            <button 
              className="botaoConfirmar" 
              style={{ background: '#555' }}
              onClick={irParaInicio}
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modalOverlay">
      <div className="modalConteudo">
        <button className="botaoFechar" onClick={fechar}>&times;</button>
        
        <div className="checkoutCorpo">
          <img src={produto.imagem} alt={produto.nome} className="imgCheckout" />
          
          <div className="infoCheckout">
            <h2>Finalizar Pedido</h2>
            <h3>{produto.nome}</h3>
            <p className="precoCheckout">{produto.preco}</p>
            
            <form className="formCheckout" onSubmit={handleConfirmar}>
              <input type="text" placeholder="Seu nome completo" required />
              <input type="text" placeholder="Endereço de Entrega (Rua, Número, Bairro)" required />
              
              <select required defaultValue="">
                <option value="" disabled>Selecione a Forma de Pagamento</option>
                <option value="cartao">Cartão de Crédito / Débito</option>
                <option value="pix">Pix</option>
                <option value="dinheiro">Dinheiro</option>
              </select>
              
              <button type="submit" className="botaoConfirmar">
                Confirmar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;