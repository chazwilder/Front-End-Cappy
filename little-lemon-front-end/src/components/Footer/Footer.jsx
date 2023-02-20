import React from "react";
import { useStyles } from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer} style={{ position: "relative" }}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.colLg} style={{ marginLeft: "auto" }}>
            <div className={classes.logo}>
              <img
                src={require("../images/footlogo.png")}
                alt="logo"
                style={{ maxHeight: "150px" }}
              />
            </div>
          </div>
          <div className={classes.colLg} style={{ marginLeft: "auto" }}>
            <div className={classes.links}>
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="https://www.instagram.com">Menu</a>
                </li>
                <li>
                  <a href="https://www.youtube.com">Reservations</a>
                </li>
                <li>
                  <a href="https://www.youtube.com">Order Online</a>
                </li>
                <li>
                  <a href="https://www.youtube.com">Login</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.colLg} style={{ marginLeft: "auto" }}>
            <div>
              <h3>Contact</h3>
            </div>
            <div className={classes.footerLinks}>
              <div>
                <span>Address: 104 N Street, </span>
                <div>
                  <span>Little Lemon Ln, </span>
                  <div>
                    <span>Chicago IL, 23233</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.footerLinks}>
              <span>Phone: 804-804-8484</span>
            </div>
            <div className={classes.footerLinks}>
              <span>
                Email: hello@littlelemon.com
              </span>
            </div>
          </div>
          <div className={classes.colLg} style={{ marginLeft: "auto" }}>
            <div className={classes.links}>
              <h3>Social Media Links</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
