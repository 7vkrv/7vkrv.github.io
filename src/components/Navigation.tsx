import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  setActiveSection, 
  onItemClick 
}) => {
  const navItems = ['about', 'pedigree', 'projects', 'creative'];

  const handleClick = (section: string) => {
    setActiveSection(section);
    if (onItemClick) onItemClick();
  };

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className={`
            capitalize text-base font-medium transition-colors duration-200
            ${activeSection === item 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}
          `}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default Navigation;