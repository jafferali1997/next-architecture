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

  const [values, setValues] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [inputValuee, setInputValuee] = useState('');

  function handleAddClick() {
    setValues([...values, inputValuee]);
    setInputValuee('');
  }

  function handleInputChangee(event) {
    setInputValuee(event.target.value);
  }

  function handleShowClick() {
    setShowInput(true);
  }
  return (
    <>
      <table className="tw-w-full">
        <thead className="tw-w-full">
          <tr className="tw-flex tw-items-center tw-justify-between">
            {columns.map((column) => (
              <th
                className="tw-flex tw-h-[59.33px] tw-w-full tw-flex-row tw-items-center tw-justify-center tw-gap-1 tw-rounded-[10px_0px_0px_0px] tw-border-b tw-border-solid tw-border-b-[#E7EAEE] tw-bg-[#fbfbfb] tw-px-0 tw-py-2"
                key={column}
              >
                {column}
              </th>
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
                        onChange={handleInputChangee}
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
      <div>
        {/* <button onClick={handleShowClick}>Show</button>
        {showInput && (
          <div>
            <input type="text" value={inputValuee} onChange={handleInputChangee} />
            <button onClick={handleAddClick}>Add</button>
          </div>
        )}
        <div>
          {values.map((value, index) => (
            <div>{value}</div>
          ))}
        </div> */}
      </div>
    </>
  );
}
