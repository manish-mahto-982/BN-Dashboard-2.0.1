import React, { useState } from 'react';
import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell, TextField, TablePagination } from '@mui/material';
import SalesLayout from 'src/screens/sales-dashboard/layout';
import MDBox from 'src/components/theme/common/MDBox';

const AllLeadTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sample user data
  const userData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main St, City, Country',
      phone: '123-456-7890',
      age: 30,
      hobbies: 'Reading, Traveling',
      favoriteCode: 'JavaScript',
      textInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      address: '456 Elm St, Town, Country',
      phone: '987-654-3210',
      age: 25,
      hobbies: 'Painting, Cooking',
      favoriteCode: 'Python',
      textInformation: 'Nulla convallis risus sed lectus sagittis, vel scelerisque tortor tincidunt.',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        address: '456 Elm St, Town, Country',
        phone: '987-654-3210',
        age: 25,
        hobbies: 'Painting, Cooking',
        favoriteCode: 'Python',
        textInformation: 'Nulla convallis risus sed lectus sagittis, vel scelerisque tortor tincidunt.',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        address: '456 Elm St, Town, Country',
        phone: '987-654-3210',
        age: 25,
        hobbies: 'Painting, Cooking',
        favoriteCode: 'Python',
        textInformation: 'Nulla convallis risus sed lectus sagittis, vel scelerisque tortor tincidunt.',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        address: '456 Elm St, Town, Country',
        phone: '987-654-3210',
        age: 25,
        hobbies: 'Painting, Cooking',
        favoriteCode: 'Python',
        textInformation: 'Nulla convallis risus sed lectus sagittis, vel scelerisque tortor tincidunt.',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        address: '456 Elm St, Town, Country',
        phone: '987-654-3210',
        age: 25,
        hobbies: 'Painting, Cooking',
        favoriteCode: 'Python',
        textInformation: 'Nulla convallis risus sed lectus sagittis, vel scelerisque tortor tincidunt.',
      },
    // More user objects...
  ];

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
    setPage(0); // Reset page when searching
  };

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
    user.address.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <SalesLayout>
      <MDBox>
        <TextField
          label="Search"
          value={searchValue}
          onChange={handleChangeSearch}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Details</TableCell>
                <TableCell>Contact Details</TableCell>
                <TableCell>Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <strong>Name:</strong> {user.name}
                        <br />
                        <strong>Email:</strong> {user.email}
                        <br />
                        <strong>Address:</strong> {user.address}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <strong>Phone:</strong> {user.phone}
                        <br />
                        <strong>Age:</strong> {user.age}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <strong>Hobbies:</strong> {user.hobbies}
                        <br />
                        <strong>Favorite Code:</strong> {user.favoriteCode}
                        <br />
                        <strong>Text Information:</strong> {user.textInformation}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </MDBox>
    </SalesLayout>
  );
};

export default AllLeadTable;
