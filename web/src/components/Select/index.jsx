import { useState, useRef, useEffect } from 'react';

import { CaretDown } from '@phosphor-icons/react';

import { Container, Button, List, ListItem } from './styles';

export function Select( { onSelect } ) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleOptionSelect(option) {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(!dropdownRef?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <Container ref={dropdownRef}>
 
      <Button 
        id="select-button" 
        className={isOpen ? 'open' : ''} 
        onClick={toggleDropdown} 
        $selectedoption={selectedOption}
        ref={buttonRef}
      >
        {selectedOption || 'Selecione uma categoria'}


        <CaretDown />
      </Button>


      {isOpen &&
        <List>
          <ListItem onClick={() => handleOptionSelect("Refeição")}>
            Refeição
          </ListItem>
          
          <ListItem onClick={() => handleOptionSelect("Sobremesa")}>
            Sobremesa
          </ListItem>

          <ListItem onClick={() => handleOptionSelect("Bebida")}>
            Bebida
          </ListItem>
        </List>
      }
    </Container>
  );
}