'use client';

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function useLineItem({ handleTabClick, handleTabCompleted }) {
  const [isChecked, setIsChecked] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [ids, setIds] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

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

  const handleClik = () => {
    handleTabClick('HeaderBody');
    handleTabCompleted('customer_details');
  };

  console.log(ids);

  const columns = [
    { field: 'pp', headerName: 'Add PP', width: 90 },
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

  const rows = [
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
      total: '2300'
    }
  ];

  const isIdAdded = (id) => {
    return ids.includes(JSON.parse(id));
  };

  const checkBoxHandler = (e) => {
    console.log(e.target.value);
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
      let ids = rows?.map((data, index) => index);
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
    rows,
    ids,
    isIdAdded,
    allCheckboxHandler,
    checkBoxHandler,
    openPopup,
    setOpenPopup,
    ref
  };
}

useLineItem.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  handleTabCompleted: PropTypes.func.isRequired
};
