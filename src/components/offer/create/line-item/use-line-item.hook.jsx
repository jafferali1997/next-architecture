'use client';

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function useLineItem({ handleTabClick, handleTabCompleted }) {
  const ref = useRef(null);
  const [isChecked, setIsChecked] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [ids, setIds] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [sortDirection, setSortDirection] = useState('');

  const [data, setData] = useState([
    {
      id: 0,
      pp: 'pp-icon',
      action: 'action',
      product: '21',
      description: 'Food',
      quantity: '23',
      positionNo: '22',
      unit: 'pc',
      price: '2300',
      tax: '19.00',
      discount: '10 %',
      total: '2300'
    },
    {
      id: 1,
      pp: 'pp-icon',
      action: 'action',
      product: '21',
      description: 'Glasses',
      quantity: '23',
      positionNo: '22',
      unit: 'pc',
      price: '2300',
      tax: '19.00',
      discount: '10 %',
      total: '2400'
    }
  ]);

  const handleActionClick = (row) => {
    if (selectedRow && selectedRow.id === row.id) {
      setSelectedRow((prevRow) => ({
        ...prevRow,
        name: inputValue
      }));
      setInputValue('');
      setSelectedRow(null);
    } else {
      setSelectedRow(row);
      setInputValue(row.name);
    }
  };
  const handleSaveClick = () => {
    // Save the updated name to the selected row
    setSelectedRow((prevRow) => ({
      ...prevRow,
      name: inputValue
    }));

    setInputValue('');
    setSelectedRow(null);
  };
  function handleInputChangee(event) {
    setInputValue(event.target.value);
  }

  const handlePagination = (pageData, number) => {
    console.log(pageData)
    setData(pageData);
  };

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

  const handleClik = () => {
    handleTabClick('HeaderBody');
    handleTabCompleted('customer_details');
  };

  console.log(ids);

  const columns = [
    {
      field: 'pp',
      headerName: 'Add PP',
      width: 90
    },
    { field: 'action', headerName: 'Action', width: 150 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'description', headerName: 'Description', width: 90 },
    { field: 'quantity', headerName: 'Quantity', width: 250 },
    { field: 'positionNo', headerName: 'Position No', width: 250 },
    { field: 'unit', headerName: 'Unit', width: 250 },
    { field: 'price', headerName: 'Price', width: 250 },
    { field: 'tax', headerName: 'Tax', width: 250 },
    { field: 'discount', headerName: 'Discount', width: 250 },
    { field: 'total', headerName: 'Total', width: 250 }
  ];

  const handleOnClick = (id) => {
    console.log(`PP clicked for row with id: ${id}`);
  };

  const handleSortClick = (field) => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    sortData(field, sortDirection);
  };

  const sortData = (field, direction) => {
    const sortedRows = [...data].sort((a, b) => {
      if (direction === 'asc') {
        return a[field].localeCompare(b[field]);
      } else {
        return b[field].localeCompare(a[field]);
      }
    });

    setData(sortedRows);
  };

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

  const isIdAdded = (id) => {
    return ids.includes(JSON.parse(id));
  };

  const checkBoxHandler = (e) => {
    setIsChecked(e.target.value);

    let id = JSON.parse(e.target.value);
    let stateIds = ids;

    if (isIdAdded(id)) {
      stateIds = stateIds.filter((ids) => ids !== id);
    } else {
      stateIds.push(id);
    }
    setIds([...stateIds]);
  };
  const allCheckboxHandler = (e) => {
    if (e.target.checked) {
      let ids = data?.map((data, index) => index);
      setIds([...ids]);
    } else {
      setIds([]);
    }
  };

  return {
    isChecked,
    isSubmit,
    setIsSubmit,
    handleClik,
    columns,
    data,
    ids,
    isIdAdded,
    allCheckboxHandler,
    checkBoxHandler,
    openPopup,
    setOpenPopup,
    ref,
    handleActionClick,
    handleSaveClick,
    handleInputChangee,
    inputValue,
    selectedRow,
    sortDirection,
    setSortDirection,
    handleSortClick,
    setData,
    handlePagination
  };
}

useLineItem.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
