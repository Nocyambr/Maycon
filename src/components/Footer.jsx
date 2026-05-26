import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <section className="footerBloco">
          <h3>Encontre a Banca</h3>
          <p>Avenida dos Sabores, 245 - Centro, São Paulo - SP</p>
          <p>Segunda a sábado, das 18h às 00h</p>
          <a
            href="https://www.google.com/maps?q=Avenida+Paulista+1578,+S%C3%A3o+Paulo"
            target="_blank"
            rel="noreferrer"
            className="footerLink"
          >
            Ver no mapa
          </a>
        </section>

        <section className="footerBloco">
          <h3>Contato</h3>
          <p>📞 (11) 99999-0000</p>
          <p>✉️ atendimento@pastelaria.com.br</p>
          <p>🛵 Delivery até 8km da loja</p>
        </section>

        <section className="footerBloco">
          <h3>Redes sociais</h3>
          <div className="footerSocials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footerLink">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footerLink">Facebook</a>
            <a href="https://wa.me/5511999990000" target="_blank" rel="noreferrer" className="footerLink">WhatsApp</a>
          </div>
        </section>
      </div>

      <p className="footerCopy">© {new Date().getFullYear()} Pastelaria do Maycon. Feito com massa crocante e muito recheio.</p>
    </footer>
  );
}

export default Footer;
