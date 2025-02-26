// src/components/CollapsibleList.tsx
import React, { useState, ReactNode } from 'react';
import '../style.css';

interface CollapsibleListProps {
  title: ReactNode;
  items: ReactNode[];
}

const CollapsibleList = ({ title, items }: CollapsibleListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleOpen} style={{ cursor: 'pointer' }}>
        {isOpen ? '∨' : '>'} {title}
      </div>
      {isOpen && (
        <ul className="dash-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))} 
        </ul>
      )}
    </div>
  );
};

export default CollapsibleList;