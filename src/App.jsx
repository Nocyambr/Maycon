import Header from './components/Header';
import Card from './components/Card';
import { produtos } from './data/produtos';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      
      <main className="mainContainer">
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
      </main>
    </div>
  );
}

export default App;