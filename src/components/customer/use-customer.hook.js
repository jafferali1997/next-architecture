'use client';

/* eslint-disable react/jsx-filename-extension */
import { useEffect, useState } from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import PencilIcon from '@/common/icons/pencil.icon';
import CircleIcon from '@/common/icons/circle.icon';
import EyeIcon from '@/common/icons/eye.icon';
import CommentIcon from '@/common/icons/comment.icon';
import UploadIcon from '@/common/icons/upload.icon';
import DeleteIcon from '@/common/icons/delete.icon';
import {
  deleteCustomer,
  getAllCustomer
} from '@/provider/features/customer/customer.slice';

export default function useCustomer() {
  const FILES_TO_BE_IGNORE = ['createdBy', 'updatedBy', 'createdAt', 'updatedAt'];

  const getActionColumn = () => {
    return {
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
    };
  };

  const getColumns = (dataObject) => {
    const columns = [];
    Object.keys(dataObject).forEach((key) => {
      let columnObject = {
        field: key,
        headerName: key,
        headerClassName: 'table-heading ',
        cellClassName: 'table-data ',
        width: 200
      };
      if (!FILES_TO_BE_IGNORE.includes(key)) {
        if (key === 'isDraft') {
          columnObject = {
            ...columnObject,
            renderCell: (params) => (
              <span
                className={params.value == 'active' ? 'status-active' : 'status-error'}
              >
                {params.value}
              </span>
            )
          };
        }
        columns.push(columnObject);
      }
    });
    columns.push(getActionColumn());
    return columns;
  };

  // const getRows = (data) => {
  //   let rows = [];
  //   data.forEach((item) => {
  //   }
  // }

  // const columns = [
  //   {
  //     field: 'id',
  //     headerName: 'Customer ID #',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     width: 180
  //   },
  //   {
  //     field: 'firstName',
  //     headerName: 'First name',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     width: 150
  //   },
  //   {
  //     field: 'lastName',
  //     headerName: 'Last name',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     width: 150
  //   },
  //   {
  //     field: 'gender',
  //     headerName: 'Gender',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     width: 150
  //   },
  //   {
  //     field: 'phone',
  //     headerName: 'Phone',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     width: 200
  //   },
  //   {
  //     field: 'companyName',
  //     headerName: 'Company name',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     width: 200
  //   },
  //   {
  //     field: 'companyAddress',
  //     headerName: 'Company address',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     width: 260
  //   },
  //   {
  //     field: 'Status',
  //     headerName: 'Status',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     width: 110,
  //     renderCell: (params) => (
  //       // eslint-disable-next-line react/jsx-filename-extension
  //       <span className={params.value == 'active' ? 'status-active' : 'status-error'}>
  //         {params.value}
  //       </span>
  //     )
  //   },
  //   {
  //     field: 'actions',
  //     headerName: 'Action',
  //     headerClassName: 'table-heading ',
  //     cellClassName: 'table-data ',
  //     type: 'actions',
  //     width: 100,
  //     getActions: (cell) => [
  //       <GridActionsCellItem
  //         icon={<PencilIcon />}
  //         label="Edit"
  //         onClick={() => handleEditAction(cell.row)}
  //         showInMenu
  //       />,
  //       <GridActionsCellItem
  //         icon={<CircleIcon />}
  //         label="Active"
  //         onClick={() => handleStatusAction(cell.row)}
  //         showInMenu
  //       />,
  //       <GridActionsCellItem
  //         icon={<EyeIcon />}
  //         label="View Detail"
  //         onClick={() => handleViewAction(cell.row)}
  //         showInMenu
  //       />,
  //       <GridActionsCellItem
  //         icon={<CommentIcon />}
  //         label="Add comments"
  //         onClick={() => handleAddCommentAction(cell.row)}
  //         showInMenu
  //       />,
  //       <GridActionsCellItem
  //         icon={<UploadIcon />}
  //         label="Upload files"
  //         onClick={() => handleUploadAction(cell.row)}
  //         showInMenu
  //       />,
  //       <GridActionsCellItem
  //         icon={<DeleteIcon />}
  //         label="Delete"
  //         onClick={() => handleDeleteAction(cell.row)}
  //         showInMenu
  //       />
  //     ]
  //   }
  // ];

  const initialColumnState = (columns) => {
    return columns.reduce((acc, column, idx) => {
      if (idx < 5 || column.field === 'actions') acc[column.field] = true;
      else acc[column.field] = false;
      return acc;
    }, {});
  };

  // const rows = [
  //   {
  //     id: '23423',
  //     firstName: 'Jon Jon 2 Jon 1 Jon 3 Jon 4 Jon',
  //     lastName: 'Snow',
  //     companyName: 'Companyname',
  //     companyAddress: 'Companyaddress',
  //     Status: 'active',
  //     Action: 'Action'
  //   },
  //   {
  //     id: '243434',
  //     firstName: 'Jon',
  //     lastName: 'Snow',
  //     companyName: 'Companyname',
  //     companyAddress: 'Companyaddress',
  //     Status: 'active',
  //     Action: 'Action'
  //   },
  //   {
  //     id: '3535',
  //     firstName: 'Jon',
  //     lastName: 'Snow',
  //     companyName: 'Companyname',
  //     companyAddress: 'Companyaddress',
  //     Status: 'in-active',
  //     Action: 'Action'
  //   },
  //   {
  //     id: '534345',
  //     firstName: 'Jon',
  //     lastName: 'Snow',
  //     companyName: 'Companyname',
  //     companyAddress: 'Companyaddress',
  //     Status: 'active',
  //     Action: 'Action'
  //   },
  //   {
  //     id: '53454',
  //     firstName: 'Jon',
  //     lastName: 'Snow',
  //     companyName: 'Companyname',
  //     companyAddress: 'Companyaddress',
  //     Status: 'active',
  //     Action: 'Action'
  //   },
  //   {
  //     id: '5345',
  //     firstName: 'Jon',
  //     lastName: 'Snow',
  //     companyName: 'Companyname',
  //     companyAddress: 'Companyaddress',
  //     Status: 'active',
  //     Action: 'Action'
  //   }
  // ];

  const [columnState, setColumnState] = useState([]);
  const [open, setOpen] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMsg, setToasterMsg] = useState('');
  const [tableColumns, setTableColumns] = useState([]);
  const [tableRows, setTableRows] = useState([]);

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
      // showToaster(true);
      // setToasterMsg('Customer deleted successfully');
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

  const fetchData = async () => {
    const data = await dispatch(
      getAllCustomer({
        payload: {
          page: 1,
          pageSize: 20,
          sortColumn: 'id',
          sortOrder: 'DESC',
          condition: {}
        }
      })
    );
    // const data = {
    //   records: [
    //     {
    //       id: 6,
    //       createdBy: 2,
    //       updatedBy: null,
    //       createdAt: '2023-06-05T11:04:35.555Z',
    //       updatedAt: '2023-06-05T13:25:24.008Z',
    //       accountOwnerName: null,
    //       iban: null,
    //       city: 'Lahore',
    //       country: 'Pakistan',
    //       address: '56yujh',
    //       postalCode: 120,
    //       firstName: 'ALI',
    //       lastName: 'Raza',
    //       bic: null,
    //       mendateReferance: null,
    //       mandateGenerateDate: null,
    //       nameOfCreditCard: null,
    //       creditCardNumber: null,
    //       creditCardExpiry: null,
    //       creditCardCVV: null,
    //       companyName: null,
    //       companyEmail: null,
    //       companyPhone: null,
    //       companyFax: null,
    //       companyMobile: null,
    //       companyUrl: null,
    //       companySize: null,
    //       tin: null,
    //       vat: null,
    //       vatStatus: false,
    //       isDraft: true,
    //       discountTerms: 'string',
    //       discountAmount: 12,
    //       discountValidTill: '2023-06-05T13:25:03.177Z',
    //       termOfPayment: 'CASH_DISCOUNT_TARGET_AS_A_DATE',
    //       businessDetailId: 3,
    //       companyAddress: [],
    //       additionalContact: [],
    //       termOfDelivery: [],
    //       priceGroup: [],
    //       discountGroup: []
    //     }
    //   ],
    //   totalRecords: 1
    // };
    console.log(data.payload);

    if (data?.payload?.TotalRecords > 0) {
      const columns = getColumns(data.payload.data[0]);
      setColumnState(initialColumnState(columns));
      setTableColumns(columns);
      setTableRows(data.payload.data);
    }
  };

  useEffect(() => {
    // need to send callback message for toaster
    fetchData();
  }, []);

  return {
    handleColShow,
    open,
    columns: tableColumns,
    columnState,
    rows: tableRows,
    handleToggleColumn,
    showToaster,
    toasterMsg,
    setShowToaster
  };
}
