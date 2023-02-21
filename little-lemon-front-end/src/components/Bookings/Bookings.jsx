import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useStyles } from "./styles";
import { useContext } from "react";
import BookingContext from "../context/BookingContext";



const Bookings = () => {
    const classes = useStyles();
    const {bookings} = useContext(BookingContext);

  return (
    <div className={classes.booking}>
        <div className={classes.container}>

      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Guests</TableCell>
              <TableCell>Occasion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{booking.email}</TableCell>
                <TableCell>{booking.dt}</TableCell>
                <TableCell>{booking.dttm}</TableCell>
                <TableCell>{booking.guests}</TableCell>
                <TableCell>{booking.occasion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default Bookings;
