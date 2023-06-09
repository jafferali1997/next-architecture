'use client';

/* eslint-disable react/button-has-type */

import React, { useState } from 'react';

export default function Page() {
  const columns = ['Name', 'Age', 'Email'];
  const rows = [
    { id: 1, Name: 'John Doe', Age: 30, Email: 'johndoe@example.com' },
    { id: 2, Name: 'Jane Smith', Age: 25, Email: 'janesmith@example.com' },
    { id: 3, Name: 'Bob Johnson', Age: 40, Email: 'bobjohnson@example.com' },
    { id: 4, Name: 'Sara Lee', Age: 35, Email: 'saralee@example.com' }
  ];
  const [selectedRow, setSelectedRow] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleActionClick = (row) => {
    setSelectedRow(row);
    setInputValue(row.name); // Set the input value to the name of the selected row
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    // Save the updated name to the selected row
    setSelectedRow((prevRow) => ({
      ...prevRow,
      name: inputValue
    }));
    // Reset the input value and selected row
    setInputValue('');
    setSelectedRow(null);
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              {columns.map((column) => (
                <td key={`${row.id}-${column}`}>{row[column]}</td>
              ))}
              <td>
                <button onClick={() => handleActionClick(row)}>Action</button>
              </td>
            </tr>
            {selectedRow && selectedRow.id === row.id && (
              <tr>
                <td colSpan={columns.length + 1}>
                  <div>
                    <label htmlFor="name-input">Name:</label>
                    <input
                      id="name-input"
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <button onClick={handleSaveClick}>Save</button>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
