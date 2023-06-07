import { useState } from 'react';

export default function useCategoryColumn({ handleAddCategory, categoryToRender }) {
  const [search, setSearch] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState();
  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleAddButtonChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    handleAddCategory(categoryToRender, value);
  };

  const handleSearchButton = (e) => {
    setSearch(e.target.value);
  };

  return {
    handleButtonClick,
    showInput,
    value,
    handleAddButtonChange,
    search,
    handleSubmit,
    handleSearchButton
  };
}
