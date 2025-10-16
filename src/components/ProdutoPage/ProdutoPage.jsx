import Celulares from "../Celulares/Celulares";
import Acessorios from "../Acessorios/Acessorios";
import Produtos from "../Produtos/Produtos";
import FadeInSection from "../Animacao/FadeInSection.jsx";
export default function ProdutosPage() {
  return (
    <div>
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
    </div>
  );
}
