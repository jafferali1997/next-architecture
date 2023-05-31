/* eslint-disable react/button-has-type */
import React from 'react';
import UseCustomTableHook from './use-custom-table.hook';

export default function CustomTable() {
  const {
    selectedRows,
    setSelectedRows,
    data,
    columns,
    handleSelectRow,
    handleSelectAllRows,
    currentPage,
    setCurrentPage,
    currentData,
    totalPages,
    firstEntry,
    lastEntry,
    totalEntries,
    itemsPerPage,
    handlePageClick,
    handleItemsPerPageChange
  } = UseCustomTableHook();

  return (
    <>
      <table className="tw-w-full">
        <thead className=" tw-bg-secondary-light-blue">
          <tr>
            <th className="table-heading ">
              <input
                type="checkbox"
                className="unchecked:tw-bg-[url('/assets/images/unchecked.svg')] tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-gray-300 tw-bg-cover checked:tw-bg-[url('/assets/images/checked.svg')]"
                checked={selectedRows.length === data.length}
                onChange={handleSelectAllRows}
              />
            </th>
            {columns.map((column) => (
              <th className="table-heading " key={column.field}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr key={row.id}>
              <td className="table-data">
                <input
                  type="checkbox"
                  className="unchecked:tw-bg-[url('/assets/images/unchecked.svg')] tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-gray-300 tw-bg-cover checked:tw-bg-[url('/assets/images/checked.svg')]"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleSelectRow(row.id)}
                />
              </td>
              {columns.map((column) => (
                <td className="table-data" key={column.field}>
                  {row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tw-flex tw-justify-between">
        <div className="tw-flex tw-items-center tw-gap-[8px] tw-pl-1 tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px]">
          <div>
            <span className="tw-font-dm tw-text-xs tw-font-normal tw-not-italic tw-leading-[18px]">
              Show
            </span>
            <select
              className="tw-ml-2 tw-h-[27px] tw-w-[52px] tw-rounded tw-border tw-border-solid tw-border-[#E0E7ED] tw-px-1 tw-outline-none "
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
            </select>
          </div>
          <p className=" tw-pl-1">
            entries
            <span className="tw-leading-[18px]; tw-pl-1 tw-font-dm tw-text-xs tw-font-normal tw-not-italic">
              {firstEntry}
            </span>
            <span className="tw-pl-1 tw-text-text-ultra-light-gray">
              to {lastEntry} of {totalEntries} entries
            </span>
          </p>
        </div>
        <div className="tw-flex tw-w-[20%] tw-gap-[12px]">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-handle"
          >
            <img src="assets/images/back-arrow.svg" alt="Next" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i + 1)}
              disabled={currentPage === i + 1}
              className={`pagination-number ${
                currentPage === i + 1 ? 'tw-bg-primary tw-text-white' : ''
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="pagination-handle"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src="assets/images/next-arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
    </>
  );
}
