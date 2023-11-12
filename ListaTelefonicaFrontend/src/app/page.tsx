"use client";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useRouter } from 'next/navigation';
import userService from '@/services/userServices';
import { useEffect, useState } from 'react';

interface userData {
  name: string;
  id: number;
}

interface userPhones {
  id: number;
  number: string;
  userId: number;
}

export default function ListaTelefonica() {
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState<userData[]>([]);
  const [phones, setPhones] = useState<userPhones[]>([]);

  const router = useRouter();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleClick(id: number) {
    setOpen(true);
    router.push(`/?${id}`);

    userService.getOneUser(id).then((res: userPhones[]) => {
      const updatedPhoneRows: userPhones[] = [];

      res.forEach((userPhones: userPhones) => {

        const processedUser = {
          number: userPhones.number,
          id: userPhones.id,
          userId: userPhones.userId,
        };
        updatedPhoneRows.push(processedUser);

      });
      setPhones(updatedPhoneRows);
    })
  }

  useEffect(() => {
    userService.getAllUsers().then((res) => {
      const updatedRows: userData[] = [];

      res.forEach((user: { name: string; id: number }) => {

        const processedUser: userData = {
          name: user.name,
          id: user.id,
        };

        updatedRows.push(processedUser);
      });

      setRows(updatedRows);
    });
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <main style={{ display: "flex", justifyContent: "center", width: "20rem", margin: "auto", marginTop: "20vh" }}>
      <Paper sx={{ width: '100%', overflow: 'hidden', margin: "auto", border: "2px solid #7a7878" }}>
        <TableContainer sx={{ maxHeight: 540, alignItems: "center" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "17px" }}
                  key={"Nome"}
                  align={"center"}
                  style={{ minWidth: "50" }}
                >
                  <h4> Nome </h4>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" onClick={() => handleClick(row.id)} tabIndex={-1} key={row.id} sx={{ cursor: "pointer" }}>
                      <TableCell align={"center"}>
                        {row.name}
                      </TableCell>

                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
          rowsPerPageOptions={[5]}
          component="div"
          count={rows.length}
          rowsPerPage={5}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#fff',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          color: "#040418"
        }}>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Números registrados:
          </Typography>
          <List>
            {phones.map((phone) => {
              const formattedNumber = `+(${phone.number.slice(0, 2)}) ${phone.number.slice(2, 4)} ${phone.number.slice(4, 9)}-${phone.number.slice(9)}`;

              return (
                <ListItem disablePadding key={phone.id}>
                  <ListItemButton>
                    <ListItemIcon>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={formattedNumber} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Modal>
    </main>
  );
}