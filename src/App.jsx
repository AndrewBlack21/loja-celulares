import "./App.css";

// Componentes
import Navbar from "./components/NavBar/Navbar.jsx";
import LojaSelector from "./components/LojaSeleção/LojaSelector.jsx";
import Acessorios from "./components/Acessorios/Acessorios.jsx";
import Produtos from "./components/Produtos/Produtos.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ListaProdutos from "./components/ListaProdutos";
import Hero from "./components/HeroSection/Hero.jsx";
import Celulares from "./components/Celulares/Celulares.jsx";
import CarrinhoPage from "./components/Carrinho/CarrinhoPage.jsx";
import Servico from "./components/Servicos/Servico.jsx";
import ProdutoPage from "./components/ProdutoPage/ProdutoPage.jsx";

// Biblioteca
import { Routes, Route } from "react-router-dom";
import FadeInSection from "./components/Animacao/FadeInSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FadeInSection>
                <Hero />
              </FadeInSection>

              <LojaSelector />

              <FadeInSection>
                <div className="acessorios-section">
                  <h2 className="title">Oferta do Dia</h2>
                  <ListaProdutos limit={4} />
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="acessorios-section">
                  <h2 className="title">Celulares</h2>
                  <Celulares limit={6} />
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="acessorios-section">
                  <h2 className="title">Ofertas de Acessórios</h2>
                  <Acessorios limit={6} />
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="acessorios-section">
                  <h2 className="title">Fones de Ouvido</h2>
                  <Produtos />
                </div>
              </FadeInSection>

              <FadeInSection>
                <div className="acessorios-section">
                  <h2 className="title">Nossos Serviços</h2>
                  <Servico />
                </div>
              </FadeInSection>
            </>
          }
        />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/celulares" element={<Celulares />} />
        <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/produtopage" element={<ProdutoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
