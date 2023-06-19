'use client';

/* eslint-disable react/jsx-filename-extension */
import { useEffect, useMemo, useRef, useState } from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PencilIcon from '@/common/icons/pencil.icon';
import CircleIcon from '@/common/icons/circle.icon';
import EyeIcon from '@/common/icons/eye.icon';
import CommentIcon from '@/common/icons/comment.icon';
import UploadIcon from '@/common/icons/upload.icon';
import DeleteIcon from '@/common/icons/delete.icon';
import {
  deleteCustomer,
  getAllCustomer,
  updateCustomer
} from '@/provider/features/customer/customer.slice';
import useDebounce from '@/common/hooks/useDebounce';

const FEATURES_TO_BE_SHOW = {
  id: 'Customer ID #',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phone: 'Phone',
  isActive: 'Status',
  gender: 'Gender',
  address: 'Address',
  state: 'State',
  country: 'Country',
  postalCode: 'Postal Code',
  companyName: 'Company Name',
  companyAddress: 'Company Address',
  companyPhone: 'Company Phone Number',
  companyEmail: 'Company Email Address',
  companyMobile: 'Company Mobile Number',
  companyFax: 'Fax Number',
  tin: 'TIN'
};
const DEFAULT_COLUMNS = ['id', 'firstName', 'lastName', 'companyName', 'isActive'];

const FEATURES_TO_BE_IGNORE = ['createdBy', 'updatedBy', 'createdAt', 'updatedAt'];

export default function useCustomer() {
  const getActionColumn = (statusText) => {
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
          label="Active/In-active"
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
        headerName: FEATURES_TO_BE_SHOW[key],
        headerClassName: 'table-heading ',
        cellClassName: 'table-data ',
        width: 150
      };
      if (!FEATURES_TO_BE_IGNORE.includes(key)) {
        if (key === 'isActive') {
          columnObject = {
            ...columnObject,
            renderCell: (params) => (
              <span className={params.value ? 'status-active' : 'status-error'}>
                {params.value ? 'Active' : 'In-active'}
              </span>
            )
          };
        }
        if (FEATURES_TO_BE_SHOW[key]) {
          columns.push(columnObject);
        }
      }
    });
    columns.push(getActionColumn('Active'));
    return columns;
  };

  const initialColumnState = (columns) => {
    return columns.reduce((acc, column, idx) => {
      if (DEFAULT_COLUMNS.includes(column.field) || column.field === 'actions') {
        acc[column.field] = true;
      } else acc[column.field] = false;
      return acc;
    }, {});
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const [columnState, setColumnState] = useState([]);
  const [open, setOpen] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMsg, setToasterMsg] = useState('');
  const [tableColumns, setTableColumns] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const [searchText, setSearchText] = useState();

  const debouncedSearchQuery = useDebounce(searchText, 1000);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    // resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  });

  const modalCloseHandler = () => {
    setOpenModal(false);
    reset();
  };

  const fetchData = async (condition = {}) => {
    const data = await dispatch(
      getAllCustomer({
        payload: {
          page: 1,
          pageSize: 30,
          sortColumn: 'id',
          sortOrder: 'DESC',
          condition
        }
      })
    );

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
    let columnData = FEATURES_TO_BE_SHOW;
    let rows = [];
    if (data?.payload?.TotalRecords > 0) {
      // eslint-disable-next-line prefer-destructuring
      columnData = data.payload.data[0];
      rows = data.payload.data;
    }
    const columns = getColumns(columnData);
    setColumnState(initialColumnState(columns));
    setTableColumns(columns);
    setTableRows(rows);
  };

  const handleColShow = () => {
    setOpen(true);
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

  const handleDeleteAction = async (row) => {
    const data = await dispatch(deleteCustomer({ payload: row.id }));
    console.log(data, 'delete data');
    if (data?.payload) {
      fetchData();
    }
  };

  const handleStatusAction = async (row) => {
    const data = await dispatch(
      updateCustomer({
        payload: {
          data: {
            isActive: !row.isActive
          },
          id: row.id
        }
      })
    );
    console.log(data, 'update data');
    if (data?.payload) {
      fetchData();
    }
  };

  const handleAddCommentAction = (row) => {
    setOpenModal(true);
    console.log(row);
  };

  const handleUploadAction = (row) => {
    console.log(row);
  };

  const handleManageColumns = () => {
    setOpen(true);
  };

  const onCommentSubmit = (data) => {
    console.log(data);
  };

  /**
   * Search function
   */
  useMemo(() => {
    if (debouncedSearchQuery && debouncedSearchQuery?.length !== 0) {
      fetchData({ firstName: { $iLike: `%${debouncedSearchQuery}%` } });
    } else {
      fetchData();
    }
  }, [debouncedSearchQuery]);

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
    setShowToaster,
    register,
    handleSubmit,
    setValue,
    errors,
    openModal,
    setOpenModal,
    modalCloseHandler,
    onCommentSubmit,
    ref,
    handleSearch
  };
}
