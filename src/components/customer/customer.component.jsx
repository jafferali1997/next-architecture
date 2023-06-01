/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import CustomButton from '@/common/components/custom-button/custom-button.component';
import PlusIcon from '@/common/icons/plus.icon';
import CustomTable from '@/common/components/custom-table/custom-table.component';
import PencilIcon from '@/common/icons/pencil.icon';
import CircleIcon from '@/common/icons/circle.icon';
import EyeIcon from '@/common/icons/eye.icon';
import CommentIcon from '@/common/icons/comment.icon';
import UploadIcon from '@/common/icons/upload.icon';
import DeleteIcon from '@/common/icons/delete.icon';

const columns = [
  {
    field: 'id',
    headerName: 'Customer ID #',
    headerClassName: 'table-heading ',
    cellClassName: 'table-data ',
    width: 180
  },
  {
    field: 'firstName',
    headerName: 'First name',
    headerClassName: 'table-heading ',
    cellClassName: 'table-data ',
    width: 150
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    headerClassName: 'table-heading ',
    cellClassName: 'table-data ',
    width: 150
  },
  {
    field: 'companyName',
    headerName: 'Company name',
    headerClassName: 'table-heading ',
    cellClassName: 'table-data ',
    width: 200
  },
  {
    field: 'companyAddress',
    headerName: 'Company address',
    headerClassName: 'table-heading ',
    cellClassName: 'table-data ',
    width: 260
  },
  {
    field: 'Status',
    headerName: 'Status',
    headerClassName: 'table-heading ',
    cellClassName: 'table-data ',
    width: 110,
    renderCell: (params) => (
      <span className={params.value == 'active' ? 'status-active' : 'status-error'}>
        {params.value}
      </span>
    )
  },
  {
    field: 'actions',
    headerName: 'Action',
    headerClassName: 'table-heading ',
    cellClassName: 'table-data ',
    type: 'actions',
    width: 100,
    getActions: (cell) => [
      <GridActionsCellItem
        icon={<PencilIcon />}
        label="Edit"
        // onClick={() => openAddModal(cell.row)}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<CircleIcon />}
        label="Active"
        //   onClick={() => openPickModal(cell.row)}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<EyeIcon />}
        label="View Detail"
        //   onClick={() => openRemoveModal(cell.row)}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<CommentIcon />}
        label="Add comments"
        //   onClick={renderComingSoon}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<UploadIcon />}
        label="Upload files"
        //   onClick={renderComingSoon}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        //   onClick={renderComingSoon}
        showInMenu
      />
    ]
  }
];

export default function Customer() {
  const initialColumnState = (columns) => {
    return columns.reduce((acc, column) => {
      acc[column.field] = true;
      return acc;
    }, {});
  };
  const [columnState, setColumnState] = useState(initialColumnState(columns));
  const [open, setOpen] = useState(false);

  const handleColShow = () => {
    setOpen(!open);
  };

  const handleToggleColumn = (columnName) => {
    setColumnState({
      ...columnState,
      [columnName]: !columnState[columnName]
    });
  };

  const handleManageColumns = () => {
    setOpen(true);
  };
  function handleAction(id) {
    // handle the action here
    alert(`click  ${id} `);
  }

  const rows = [
    {
      id: '23423',
      firstName: 'Jon',
      lastName: 'Snow',
      companyName: 'Companyname',
      companyAddress: 'Companyaddress',
      Status: 'active',
      Action: 'Action'
    },
    {
      id: '243434',
      firstName: 'Jon',
      lastName: 'Snow',
      companyName: 'Companyname',
      companyAddress: 'Companyaddress',
      Status: 'active',
      Action: 'Action'
    },
    {
      id: '3535',
      firstName: 'Jon',
      lastName: 'Snow',
      companyName: 'Companyname',
      companyAddress: 'Companyaddress',
      Status: 'in-active',
      Action: 'Action'
    },
    {
      id: '534345',
      firstName: 'Jon',
      lastName: 'Snow',
      companyName: 'Companyname',
      companyAddress: 'Companyaddress',
      Status: 'active',
      Action: 'Action'
    },
    {
      id: '53454',
      firstName: 'Jon',
      lastName: 'Snow',
      companyName: 'Companyname',
      companyAddress: 'Companyaddress',
      Status: 'active',
      Action: 'Action'
    },
    {
      id: '5345',
      firstName: 'Jon',
      lastName: 'Snow',
      companyName: 'Companyname',
      companyAddress: 'Companyaddress',
      Status: 'active',
      Action: 'Action'
    }
  ];
  return (
    <div className="">
      <div className="">
        <div className="tw-min-h-[100vh] tw-w-full tw-bg-[#FBFBFB] tw-px-[23px] ">
          <div className="tw-flex tw-items-center tw-justify-between tw-py-[24px]">
            <h1 className="h1">List of customer</h1>
            <CustomButton
              className="btn-primary"
              text="Create customer"
              startIcon={<PlusIcon />}
            />
          </div>
          <div className=" tw-rounded-[10px_10px_0px_0px] tw-border-solid tw-border-[#BBBBBB1A] tw-bg-white">
            <div className="tw-flex tw-h-[66px] tw-w-full tw-items-center tw-justify-between tw-bg-[#BBBBBB1A]">
              <div className="tw-flex tw-items-center tw-gap-[16px]">
                <div className="tw-h-[42px] tw-min-w-[323px]  tw-bg-white">
                  input here
                </div>
                <img src="/assets/images/filter-icon.svg" alt="img" />
              </div>
              <div className="tw-relative">
                <button
                  onClick={handleColShow}
                  className="tw-font-dm tw-text-sm tw-font-normal tw-not-italic tw-leading-[21buttonx] tw-text-[#585858] tw-underline"
                >
                  Show columns
                </button>
                {open && (
                  <div className="tw-absolute tw-left-[-200px] tw-top-10 tw-z-[100] tw-flex  tw-w-[257px] tw-flex-col tw-items-start tw-gap-[11px]  tw-rounded-md tw-bg-white tw-p-3">
                    {columns.map((col) => (
                      <div key={col.field} className="tw-flex tw-gap-2">
                        <input
                          id={col.headerName}
                          type="checkbox"
                          className="unchecked:tw-bg-[url('/assets/images/unchecked.svg')] tw-h-4 tw-w-4 tw-appearance-none tw-rounded-sm tw-border tw-border-gray-300 tw-bg-cover checked:tw-bg-[url('/assets/images/checked.svg')]"
                          checked={columnState[col.field]}
                          onChange={() => handleToggleColumn(col.field)}
                        />
                        <label
                          className="tw-font-dm tw-text-xs tw-font-medium tw-not-italic tw-leading-[18px] tw-text-[#2C2E3E]"
                          htmlFor={col.headerName}
                        >
                          {col.headerName}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <CustomTable
              columns={columns.filter((col) => columnState[col.field])}
              rows={rows}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
