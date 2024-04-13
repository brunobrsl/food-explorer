import { Container, Main, Banner } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Carousel() {
  return (
    <Container>
      <Header />
      
      <Main>
        <Banner>
          <img className="desktop-img" src="../../assets/banner-img-desktop.png" alt="Imagem do banner" />
          <img className="mobile-img" src="../../assets/banner-img-mobile.png" alt="Imagem do banner" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>
      </Main>

      <Footer />
    </Container>
  );
}