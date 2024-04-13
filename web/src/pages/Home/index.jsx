import { useState } from 'react';

import { SideMenu } from '../../components/SideMenu';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Main, Banner } from './styles';

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  return (
    <Container>
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Main>
        <Banner>
          <img className="desktop-img" src="../../assets/banner-img-desktop.png" alt="Imagem do banner" />
          <img className="mobile-img" src="../../assets/banner-img-mobile.png" alt="Imagem do banner" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        <Section title="Refeições" />
        <Section title="Sobremesas" />
        <Section title="Bebidas" />
      </Main>
      
      <Footer />
    </Container>
  );
}