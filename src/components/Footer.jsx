import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <section className="footerBloco">
          <h3>Encontre a Banca</h3>
          <p>Gabriel Prazeres, 245 - Centro, Cerquilho - SP</p>
          <p>Sábado e Domingo, das 08h às 13h</p>
          <a
            href="https://maps.app.goo.gl/Xm3N3Fwz7DuiMNJt5"
            target="_blank"
            rel="noreferrer"
            className="footerLink"
          >
            Ver no mapa
          </a>
        </section>

        <section className="footerBloco">
          <h3>Contato</h3>
          <p>📞 (15) 99777-0101</p>
          <p>✉️ atendimento@primos.com.br</p>
          <p>🛵 Delivery até 5km</p>
        </section>

        <section className="footerBloco">
          <h3>Redes sociais</h3>
          <div className="footerSocials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footerLink">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footerLink">Facebook</a>
            <a href="https://wa.me/15997770101" target="_blank" rel="noreferrer" className="footerLink">WhatsApp</a>
          </div>
        </section>
      </div>

      <p className="footerCopy">© {new Date().getFullYear()} Primos Pasteis. Feito com massa crocante e muito recheio.</p>
    </footer>
  );
}

export default Footer;