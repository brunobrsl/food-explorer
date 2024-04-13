import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

export function Select({ onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleBodyClick(event) {
      if (!dropdownRef.current || !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  };

  return (
    <Container ref={dropdownRef}>
      <div onClick={toggleDropdown}>
        <input type="checkbox" id="options-view-button" checked={isOpen} readOnly />
        <label htmlFor="options-view-button">{selectedOption || 'Selecione uma categoria'}</label>
      </div>

      {isOpen && (
        <ul id="options">
          {["Refeição", "Sobremesa", "Bebida"].map(option => (
            <li key={option} className="option" onClick={() => handleOptionSelect(option)}>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}