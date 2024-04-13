import { useState } from 'react';

import { X, Plus } from '@phosphor-icons/react';

import { Container } from './styles';

export function TagsInput({ id, onClick, ...rest }) {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  function handleChange(e) {
    const { value } = e.target;
    setTag(value);
  }

  function handleKeyDown(e) {
    const { key } = e;
    const newTag = tag.trim();

    if ((key === ',' || key === 'Enter' || key === 'Tab') && newTag.length && !tags.includes(newTag)) {
      e.preventDefault();
      setTags(prevTags => [...prevTags, newTag]);
      setTag('');
    } else if (key === 'Backspace' && !newTag.length && tags.length) {
      e.preventDefault();

      const tagsCopy = [...tags];
      const lastTag = tagsCopy.pop();

      setTags(tagsCopy);
      setTag(lastTag);
    }
  }

  function handleClick(e) {
    const newTag = tag.trim();

    e.preventDefault();
    setTags(prevTags => [...prevTags, newTag]);
    setTag('');
  }

  function removeTag(index) {
    setTags(prevTags => prevTags.filter((tag, i) => i !== index))
  }

  return (
    <Container>
      {tags.map((tag, index) => (
        <div key={index} className="tag-item">
          <span>{tag}</span>
          <button 
            className="remove-btn"
            onClick={() => removeTag(index)}
          >
            <X />
          </button>
        </div>
      ))}

      <div className="tag-input">
        <input
          id={id}
          type="text"
          placeholder="Adicionar"
          value={tag}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...rest}
          />

        <button
          className="add-button"
          type="button"
          onClick={handleClick}
          >
          <Plus />
        </button>
      </div>
    </Container>
  );
}