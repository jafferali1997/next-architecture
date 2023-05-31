import { useState } from 'react';

export default function UseCustomTableHook() {
  const [selectedRows, setSelectedRows] = useState([]);
  const data = [
    { id: 1, name: 'Alice', age: 25, country: 'USA' },
    { id: 2, name: 'Bob', age: 30, country: 'Canada' },
    {
      id: 3,
      name: 'Charlie',
      age: 35,
      country: 'Australia'
    },
    { id: 4, name: 'David', age: 40, country: 'UK' },
    { id: 5, name: 'Eve', age: 45, country: 'France' }
  ];

  const columns = [
    { field: 'name', header: 'Name' },
    { field: 'age', header: 'Age' },
    { field: 'country', header: 'Country' }
  ];
  const handleSelectRow = (rowId) => {
    const index = selectedRows.indexOf(rowId);
    if (index === -1) {
      setSelectedRows([...selectedRows, rowId]);
    } else {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    }
  };

  const handleSelectAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  // custom paginations
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);
  const totalEntries = data.length;
  const firstEntry = startIndex + 1;
  const lastEntry = Math.min(endIndex, totalEntries);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };
  return {
    selectedRows,
    setSelectedRows,
    handleSelectRow,
    handleSelectAllRows,
    data,
    columns,
    // Pagination
    currentPage,
    setCurrentPage,
    currentData,
    totalPages,
    firstEntry,
    lastEntry,
    totalEntries,
    handlePageClick,
    itemsPerPage,
    handleItemsPerPageChange
  };
}
