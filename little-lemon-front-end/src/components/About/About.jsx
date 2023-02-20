import React from "react";
import { useStyles } from "./styles";

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about} id='About'>
      <div className={classes.container}>
        <div className={classes.row} style={{ height:'550px'}}>
          <div className={classes.colLg} style={{position:'relative'}}>
            <div className={classes.textBox}>
            <h1 className={classes.h1} style={{ margin: "5px" }}>
              Little Lemon
            </h1>
            <h2 className={classes.h2} style={{ margin: "5px" }}>
              Chicago
            </h2>
            <p className={classes.p} style={{maxWidth:'400px'}}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          </div>
          <div className={classes.colLg} style={{position:'relative'}}>
            <img
              className={classes.img1}
              src={require("../images/grilledfish.png")}
              alt="Little Lemon"

            />
            <img
              className={classes.img2}
              src={require("../images/hero.png")}
              alt="Little Lemon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
