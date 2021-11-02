import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import './style.css';

function DashboardTable({
  title, headers, rows, handleEdit, handleDelete, addButton,
}) {
  const headersList = headers.map((header) => <TableCell key={header}>{header}</TableCell>);

  if (handleDelete || handleEdit) {
    headersList.push(<TableCell key="Actions">Actions</TableCell>);
  }

  const rowsList = rows.map((row) => {
    const values = Object.values(row);

    const valuesList = values.map((val) => <TableCell key={val}>{val}</TableCell>);

    return (
      <TableRow
        hover
        key={row.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        {valuesList}
        {(handleDelete || handleEdit) && (
        <TableCell>
          {handleEdit && <IconButton key={`edit${row.id}`} onClick={() => handleEdit(row.id)}><EditIcon color="info" /></IconButton>}
          {handleDelete && <IconButton key={`delete${row.id}`} onClick={() => handleDelete(row.id)}><DeleteOutlineIcon color="error" /></IconButton>}
        </TableCell>
        )}
      </TableRow>
    );
  });

  return (
    <div className="table-div">
      <div className="table-title">
        <h3>{title}</h3>
        {addButton}
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="big" aria-label="tableTitle">
          <TableHead>
            <TableRow>
              {headersList}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsList}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

DashboardTable.defaultProps = {
  addButton: null,
  handleDelete: null,
  handleEdit: null,
};

DashboardTable.propTypes = {
  title: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  addButton: PropTypes.node,
};

export default DashboardTable;
