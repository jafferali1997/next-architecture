import { useState } from 'react';

export default function useCategoryColumn({ handleAddCategory, categoryToRender }) {
  const [search, setSearch] = useState('');
  const [idToUpdateCategory, setIdToUpdateCategory] = useState();
  const [updateValue, setUpdateValue] = useState();
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState();
  const [openPopup, setOpenPopup] = useState(false);

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

  const handleButtonClickedit = (id) => {
    setIdToUpdateCategory(id);
    setOpenPopup(!openPopup);
  };

  return {
    handleButtonClick,
    showInput,
    value,
    handleAddButtonChange,
    search,
    handleSubmit,
    handleSearchButton,
    openPopup,
    setOpenPopup,
    handleButtonClickedit,
    idToUpdateCategory,
    setUpdateValue,
    updateValue
  };
}
