import { useState, type ReactNode, type MouseEvent } from 'react';

interface CollapsibleListProps {
  title: ReactNode;
  items: ReactNode[];
}

const CollapsibleList = ({ title, items }: CollapsibleListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((current) => !current);
  };

  const handleRowClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement && event.target.closest('a')) {
      return;
    }

    toggleOpen();
  };

  return (
    <div className="mb-[0.2rem]">
      <div onClick={handleRowClick} className="cursor-pointer">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Collapse item' : 'Expand item'}
          onClick={(event) => {
            event.stopPropagation();
            toggleOpen();
          }}
          className="mr-1 cursor-pointer border-0 bg-transparent p-0 text-left"
        >
          {isOpen ? '∨' : '>'}
        </button>
        {title}
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
