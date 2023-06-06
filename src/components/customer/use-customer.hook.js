import { useState } from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import PencilIcon from '@/common/icons/pencil.icon';
import CircleIcon from '@/common/icons/circle.icon';
import EyeIcon from '@/common/icons/eye.icon';
import CommentIcon from '@/common/icons/comment.icon';
import UploadIcon from '@/common/icons/upload.icon';
import DeleteIcon from '@/common/icons/delete.icon';
import { useDispatch } from 'react-redux';
import { deleteCustomer } from '@/provider/features/customer/customer.slice';

export default function useCustomer() {
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
        // eslint-disable-next-line react/jsx-filename-extension
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
          onClick={() => handleEditAction(cell.row)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<CircleIcon />}
          label="Active"
          onClick={() => handleStatusAction(cell.row)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<EyeIcon />}
          label="View Detail"
          onClick={() => handleViewAction(cell.row)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<CommentIcon />}
          label="Add comments"
          onClick={() => handleAddCommentAction(cell.row)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<UploadIcon />}
          label="Upload files"
          onClick={() => handleUploadAction(cell.row)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDeleteAction(cell.row)}
          showInMenu
        />
      ]
    }
  ];

  const initialColumnState = (columns) => {
    return columns.reduce((acc, column) => {
      acc[column.field] = true;
      return acc;
    }, {});
  };

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

  const [columnState, setColumnState] = useState(initialColumnState(columns));
  const [open, setOpen] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMsg, setToasterMsg] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleColShow = () => {
    setOpen(!open);
  };

  const handleToggleColumn = (columnName) => {
    setColumnState({
      ...columnState,
      [columnName]: !columnState[columnName]
    });
  };

  const handleEditAction = (row) => {
    router.push(`/customer/edit?id=${row.id}`);
  };

  const handleViewAction = (row) => {
    router.push(`/customer/details?id=${row.id}`);
  };

  const handleDeleteAction = (row) => {
    const data = dispatch(deleteCustomer({ payload: row.id }));
    if (data) {
      // show toaster
      showToaster(true);
      setToasterMsg('Customer deleted successfully');
    }
  };

  const handleStatusAction = (row) => {
    console.log(row);
  };

  const handleAddCommentAction = (row) => {
    console.log(row);
  };

  const handleUploadAction = (row) => {
    console.log(row);
  };

  const handleManageColumns = () => {
    setOpen(true);
  };

  return {
    handleColShow,
    open,
    columns,
    columnState,
    rows,
    handleToggleColumn,
    showToaster,
    toasterMsg,
    setShowToaster
  };
}
