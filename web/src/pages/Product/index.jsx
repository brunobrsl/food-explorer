import { useState } from 'react';

import { Minus, Plus, Receipt } from '@phosphor-icons/react';

import { ButtonIcon } from '../../components/ButtonIcon';
import { ButtonText } from '../../components/ButtonText';
import { Ingredient } from '../../components/Ingredient';
import { SideMenu } from '../../components/SideMenu';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Main, Dish, Content, Ingredients, Buttons, Quantity } from './styles';

export function Product() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Main>
        <ButtonText title="voltar" />

        <Dish>
          <img src="../../assets/product.png" />

          <Content>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <Ingredients>
              <Ingredient title="alface" />
              <Ingredient title="cebola" />
              <Ingredient title="pão naan" />
              <Ingredient title="pepino" />
              <Ingredient title="rabanete" />
              <Ingredient title="tomate" />
            </Ingredients>

            <Buttons>
              <Quantity>
                <ButtonIcon icon={Minus} />
                <span>01</span>
                <ButtonIcon icon={Plus} />
              </Quantity>

              <Button icon={Receipt} title="pedir ∙ R$ 25,00" />
              <Button title="incluir ∙ R$ 25,00" />
            </Buttons>
          </Content>
        </Dish>
      </Main>

      <Footer />
    </Container>
  );
}