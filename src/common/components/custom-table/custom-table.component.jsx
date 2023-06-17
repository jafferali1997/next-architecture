import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import UseCustomTableHook from './use-custom-table.hook';
import CustomPagination from '../paginations/pagination.component';

export default function CustomTable({ columns, rows }) {
  const { open, setOpen, handleToggleColumn, handleManageColumns, handlePageChange } =
    UseCustomTableHook();

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10
          }
        }
      }}
      onPageChange={handlePageChange}
      checkboxSelection
      disableColumnMenu
      disableRowSelectionOnClick
      components={{ Footer: CustomPagination }}
    >
      <CustomPagination data={rows} />
    </DataGrid>
  );
}
CustomTable.propTypes = {
  columns: PropTypes.arrayOf,
  rows: PropTypes.arrayOf
};
