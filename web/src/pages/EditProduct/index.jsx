import { useState, useRef } from 'react';

import { PencilSimple } from '@phosphor-icons/react';

import { ButtonText } from '../../components/ButtonText';
import { TagsInput } from '../../components/TagsInput';
import { SideMenu } from '../../components/SideMenu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Modal } from '../../components/Modal';

import productPlaceholder from '../../assets/product-img-placeholder.svg';

import { Container, Main, Form, ProductImg } from './styles';

export function EditProduct() {
  const avatarUrl = useRef(productPlaceholder);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  function updateAvatar(imgSrc) {
    avatarUrl.current = imgSrc;
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Main>
        <ButtonText title="voltar" />
    
        <h1>Editar prato</h1>
        
        <Form>
          <ProductImg className="grid-row-span-2">
            <img src={avatarUrl.current} />
          
            <button htmlFor="product-img" onClick={() => setModalIsOpen(true)}>
              <PencilSimple weight="bold" />
            </button>
          </ProductImg>

          <div className="form-input grid-col-span-2">
            <label htmlFor="product">Nome</label>
            <Input id="product" placeholder="Ex.: Salada Caesar" />
          </div>
            
          <div className="form-input category-select grid-col-span-2">
            <label htmlFor="select-button">Categoria</label>
            <Select />
          </div>
            
          <div className="form-input grid-col-span-3">
            <label htmlFor="tags">Ingredientes</label>
            <TagsInput id="tags" />
          </div>
            
          <div className="form-input">
            <label htmlFor="price">Preço</label>
            <Input id="price" placeholder="R$ 00,00" />
          </div>
            
          <div className="form-input">
            <label htmlFor="description">Descrição</label>
            <textarea 
              id="description" 
              placeholder="Fale brevemente sobre o prato, seus ingredientes, sua composição..."
            />
          </div>
          
          <Button className="delete-btn" title="Excluir prato" />
          <Button disabled className="submit-btn" title="Salvar alterações" />
        </Form>
      </Main>

      <Footer />
      {modalIsOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalIsOpen(false)} 
        />
      )}
    </Container>
  );
}