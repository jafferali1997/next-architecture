'use client';

/* eslint-disable react/jsx-filename-extension */
import { useEffect, useMemo, useState, useRef } from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import PencilIcon from '@/common/icons/pencil.icon';
import CircleIcon from '@/common/icons/circle.icon';
import EyeIcon from '@/common/icons/eye.icon';
import CommentIcon from '@/common/icons/comment.icon';
import UploadIcon from '@/common/icons/upload.icon';
import DeleteIcon from '@/common/icons/delete.icon';
import { deleteProduct, getAllProduct } from '@/provider/features/product/product.slice';
import useDebounce from '@/common/hooks/useDebounce';

const FEATURES_WIDTH = {
  id: 90,
  productName: 200,
  netPrice: 90,
  grossPrice: 90,
  purchasePrice: 90,
  unit: 70,
  manufacturer: 120,
  minSellingPrice: 100,
  quantity: 90,
  taxRate: 90
};

const FEATURES_TO_BE_SHOW = {
  id: 'ID #',
  productName: 'Product Name',
  netPrice: 'Net Price',
  grossPrice: 'Gross Price',
  purchasePrice: 'Purchase Price',
  unit: 'Unit',
  manufacturer: 'Manufacturer',
  minSellingPrice: 'Min Selling Price',
  quantity: 'No. of Pieces',
  taxRate: 'Tax Rate'
};

export default function useProduct() {
  const [searchText, setSearchText] = useState();
  const FILES_TO_BE_IGNORE = [
    'createdBy',
    'updatedBy',
    'createdAt',
    'updatedAt',
    'businessDetailId'
  ];

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
          icon={<EyeIcon />}
          label="View Detail"
          onClick={() => handleViewAction(cell.row)}
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
        width: FEATURES_WIDTH[key]
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

  const initialColumnState = (columns) => {
    return columns.reduce((acc, column, idx) => {
      if (idx < 5 || column.field === 'actions') acc[column.field] = true;
      else acc[column.field] = false;
      return acc;
    }, {});
  };

  const [columnState, setColumnState] = useState([]);
  const [open, setOpen] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMsg, setToasterMsg] = useState('');
  const [tableColumns, setTableColumns] = useState([]);
  const [tableRows, setTableRows] = useState([]);
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
    router.push(`/product/edit/${row.id}`);
  };

  const handleViewAction = (row) => {
    router.push(`/product/detail/${row.id}`);
  };

  const handleDeleteAction = async (row) => {
    await dispatch(deleteProduct({ payload: row.id }));
    fetchData();
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

  const fetchData = async (condition = {}) => {
    const data = await dispatch(
      getAllProduct({
        payload: {
          page: 1,
          pageSize: 10,
          sortColumn: 'id',
          sortOrder: 'DESC',
          condition
        }
      })
    );
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

  useEffect(() => {
    // need to send callback message for toaster
    fetchData();
  }, []);

  const debouncedSearchQuery = useDebounce(searchText, 1000);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  /**
   * Search function
   */
  useMemo(() => {
    if (debouncedSearchQuery && debouncedSearchQuery?.length !== 0) {
      fetchData({ productName: { $iLike: `%${debouncedSearchQuery}%` } });
    } else {
      fetchData();
    }
  }, [debouncedSearchQuery]);

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
    handleSearch
  };
}
