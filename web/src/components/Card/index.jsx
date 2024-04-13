import { HeartStraight, Minus, Plus } from '@phosphor-icons/react';

import { ButtonIcon } from '../ButtonIcon';
import { Button } from '../Button';

import { Container, AddButtons, Quantity } from './styles';

export function Card() {
  return (
    <Container>
      <ButtonIcon icon={HeartStraight} />

      <img src="../../assets/product.png" alt="Foto do prato" />

      <h3>Salada Ravanello &gt;</h3>

      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
    
      <strong>R$ 49,97</strong>

      <AddButtons>
        <Quantity>
          <ButtonIcon icon={Minus} />
            <span>01</span>
          <ButtonIcon icon={Plus} />
        </Quantity>
        
        <Button title="incluir" />
      </AddButtons>

    </Container>
  );
}