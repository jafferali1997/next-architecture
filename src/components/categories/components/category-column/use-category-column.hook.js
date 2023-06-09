import { useEffect, useRef, useState } from 'react';

export default function useCategoryColumn({ handleAddCategory, categoryToRender }) {
  const [search, setSearch] = useState('');
  const [idToUpdateCategory, setIdToUpdateCategory] = useState();
  const [updateValue, setUpdateValue] = useState();
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState();
  const [openPopup, setOpenPopup] = useState(false);
  const [clicked, setClicked] = useState({ id: null, parentCategoryId: null });
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenPopup(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (clicked.parentCategoryId && categoryToRender !== clicked.parentCategoryId) {
      setClicked({ id: null, parentCategoryId: null });
    }
  }, [categoryToRender]);

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
    updateValue,
    ref,
    clicked,
    setClicked
  };
}
