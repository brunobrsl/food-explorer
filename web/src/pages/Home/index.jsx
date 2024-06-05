import { useState } from 'react';

import { SideMenu } from '../../components/SideMenu';
import { Sections } from '../../components/Sections';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Main, Banner } from './styles';

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  function handleSearch(value) {
    setSearch(value);
  }

  return (
    <Container>
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header
        search={handleSearch}
        onOpenMenu={() => setMenuIsOpen(true)} 
      />

      <Main>
        <Banner>
          <img className="desktop-img" src="../../assets/banner-img-desktop.png" alt="Imagem do banner" />
          <img className="mobile-img" src="../../assets/banner-img-mobile.png" alt="Imagem do banner" />

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        <Sections search={search} />
      </Main>
      
      <Footer />
    </Container>
  );
}