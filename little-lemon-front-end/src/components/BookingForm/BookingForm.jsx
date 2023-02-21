import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import { useStyles } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import BookingContext from "../context/BookingContext";

const BookingForm = () => {
  const classes = useStyles();
  const {addBooking} = React.useContext(BookingContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      dt: "",
      dttm: "",
      guests: "",
      occasion: "",
    },
    onSubmit: (values) => {
      addBooking(values);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is Required!"),
      dt: Yup.date().required("Date Required!"),
      dttm: Yup.string().ensure().required("Time is Required!"),
      guests: Yup.number().required("Number Of Guest(s) Required!"),
    }),
  });

  //   useEffect(() => {
  //     if (response) {
  //       onOpen(response.type, response.message);
  //       if (response.type === "success") {
  //         formik.resetForm();
  //       }
  //     }
  //   }, [response]);

  return (
    <div className={classes.booking}>
      <div className={classes.container}>
        <div className={classes.contRow}>
          <div
            className={classes.colLg7}
            style={{
              margin: "50px",
            }}
          >
            <img
              className={classes.img}
              src={require("../images/bookTable.jpg")}
              alt="booking"
            />
          </div>
          <div className={classes.colLg}>
            <form onSubmit={formik.handleSubmit}>
              <div className={classes.colLg}>
                <FormControl sx={{ width: "100%", maxWidth: "350px" }}>
                  <div className={classes.row} style={{ maxWidth: "350px" }}>
                    <h3>Enter Email</h3>
                  </div>
                  <div className={classes.row} style={{ maxWidth: "350px" }}>
                    <TextField
                      type="text"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      error={!!formik.errors.email && formik.touched.email}
                      helperText={
                        formik.touched.email ? formik.errors.email : ""
                      }
                      sx={{ width: "100%", maxWidth: "350px" }}
                    ></TextField>
                  </div>
                </FormControl>
              </div>
              <div className={classes.colLg}>
                <FormControl sx={{ width: "100%", maxWidth: "350px" }}>
                  <div className={classes.row} style={{ maxWidth: "350px" }}>
                    <h3>Choose date</h3>
                  </div>
                  <div className={classes.row} style={{ maxWidth: "350px" }}>
                    <TextField
                      type="date"
                      name="dt"
                      onChange={formik.handleChange}
                      value={formik.values.dt}
                      error={!!formik.errors.dt && formik.touched.dt}
                      helperText={formik.touched.dt ? formik.errors.dt : ""}
                      sx={{ width: "100%", maxWidth: "350px" }}
                    ></TextField>
                  </div>
                </FormControl>
              </div>
              <div className={classes.colLg}>
                <FormControl sx={{ width: "100%", maxWidth: "350px" }}>
                  <div className={classes.row}>
                    <h3>Choose time</h3>
                  </div>
                  <div className={classes.row} style={{ maxWidth: "350px" }}>
                    <TextField
                      select
                      label="Select Time"
                      name="dttm"
                      onChange={formik.handleChange}
                      value={formik.values.dttm}
                      helperText={formik.touched.dttm ? formik.errors.dttm : ""}
                      error={formik.touched.dttm && !!formik.errors.dttm}
                      style={{ width: "100%", maxWidth: "350px" }}
                    >
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                      <MenuItem value="20:00">20:00</MenuItem>
                      <MenuItem value="21:00">21:00</MenuItem>
                      <MenuItem value="22:00">22:00</MenuItem>
                    </TextField>
                  </div>
                </FormControl>
              </div>
              <div className={classes.colLg}>
                <FormControl sx={{ width: "100%", maxWidth: "350px" }}>
                  <div className={classes.row} style={{ maxWidth: "350px" }}>
                    <h3>Number of guests</h3>
                  </div>
                  <div className={classes.row} style={{ maxWidth: "350px" }}>
                    <TextField
                      type="number"
                      placeholder="1"
                      min="1"
                      max="10"
                      name="guests"
                      onChange={formik.handleChange}
                      value={formik.values.guests}
                      error={!!formik.errors.guests && formik.touched.guests}
                      helperText={
                        formik.touched.guests ? formik.errors.guests : ""
                      }
                      sx={{ width: "100%" }}
                    />
                  </div>
                </FormControl>
              </div>
              <div className={classes.colLg}>
                <FormControl sx={{ width: "100%", maxWidth: "350px" }}>
                  <div className={classes.row}>
                    <h3>Occasion</h3>
                  </div>
                  <div className={classes.row} style={{ maxWidth: "350px" }}>
                    <Select
                      name="occasion"
                      onChange={formik.handleChange}
                      value={formik.values.occasion}
                      sx={{ width: "100%", maxWidth: "350px" }}
                    >
                      <MenuItem value="Birthday">Birthday</MenuItem>
                      <MenuItem value="Anniversary">Anniversary</MenuItem>
                    </Select>
                  </div>
                </FormControl>
              </div>
              <div className={classes.colLg}>
                <div className={classes.row} style={{ maxWidth: "350px" }}>
                  <Button
                    type="submit"
                    sx={{
                      width: "100%",
                      background: "#495E57",
                      color: "#F4CE14",
                      marginTop: "20px",
                      height: "56px",
                      boxSizing: "border-box",
                    }}
                  >
                    Make Your reservation
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
