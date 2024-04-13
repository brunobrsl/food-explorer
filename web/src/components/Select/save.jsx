import { useState, useRef, useEffect } from 'react';

import { CaretDown, CaretUp, Check } from '@phosphor-icons/react';

import { Container } from './styles';

export function Select( { onSelect } ) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleOptionSelect(option) {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
    toggleDropdown();
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
      <div onClick={toggleDropdown}>
        <input type="checkbox" id="options-view-button" checked={isOpen} readOnly />

        <div id="select-button">
          <div id="selected-value">{selectedOption || 'Selecione uma categoria'}</div>

          <div id="carets">
            <CaretUp />
            <CaretDown />
          </div>
        </div>
      </div>

      {isOpen &&
        <ul id="options">
          <li className="option" onClick={() => handleOptionSelect("Refeição")}>
            <input
              type="radio"
              name="category"
              value="meal"
            />

            <span>Refeição</span>
            <Check />
          </li>
          
          <li className="option" onClick={() => handleOptionSelect("Sobremesa")}>
            <input 
              type="radio"
              name="category"
              value="dessert"
            />

            <span>Sobremesa</span>
            <Check />
          </li>

          <li className="option" onClick={() => handleOptionSelect("Bebida")}>
            <input 
              type="radio"
              name="category"
              value="beverage"
            />

            <span>Bebida</span>
            <Check />
          </li>
        </ul>
      }
    </Container>
  );
}