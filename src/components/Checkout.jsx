import React, { useEffect, useState } from 'react';
import './Checkout.css';

function Checkout({ produto, fechar, aoFinalizarSucesso }) {
  const [pedidoConcluido, setPedidoConcluido] = useState(false);
  const finalizarSucesso = typeof aoFinalizarSucesso === 'function' ? aoFinalizarSucesso : fechar;

  useEffect(() => {
    if (!pedidoConcluido) return undefined;

    const tempoSucesso = setTimeout(() => {
      setPedidoConcluido(false);
      finalizarSucesso();
    }, 3000);

    return () => clearTimeout(tempoSucesso);
  }, [finalizarSucesso, pedidoConcluido]);

  if (!produto) return null;

  function resetarCheckout() {
    setPedidoConcluido(false);
  }

  function handleFechar() {
    resetarCheckout();
    fechar();
  }

  function handleConfirmar(e) {
    e.preventDefault();
    setPedidoConcluido(true);
  }

  if (pedidoConcluido) {
    return (
      <div className="sucessoOverlay" role="status" aria-live="polite">
        <div className="sucessoConteudo">
          <div className="sucessoIcone">✓</div>
          <h2>Compra confirmada!</h2>
          <p>Seu pedido já está sendo preparado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modalOverlay">
      <div className="modalConteudo">
        <button className="botaoFechar" onClick={handleFechar}>
          &times;
        </button>

        <div className="checkoutCorpo">
          <img src={produto.imagem} alt={produto.nome} className="imgCheckout" />

          <div className="infoCheckout">
            <h2>Finalizar Pedido</h2>
            <h3>{produto.nome}</h3>
            <p className="precoCheckout">{produto.preco}</p>

            <form className="formCheckout" onSubmit={handleConfirmar}>
              <input type="text" placeholder="Seu nome completo" required />
              <input
                type="text"
                placeholder="Endereço de Entrega (Rua, Número, Bairro)"
                required
              />

              <select required defaultValue="">
                <option value="" disabled>
                  Selecione a Forma de Pagamento
                </option>
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