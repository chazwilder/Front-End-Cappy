import React from "react";
import { useStyles } from "./styles";
import { Card, Button } from "@mui/material";
import  heroImg  from '../images/hero.png'

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.row}>
        <div className={classes.column}>
          <div>
            <h1 className={classes.h1}>Little Lemon</h1>
            <h2 className={classes.h2}>
              Chicago
            </h2>
            <p className={classes.p} style={{maxWidth: '250px'}}>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <div style={{marginTop: '2em'}}>
            <Button style={{ background: '#F4CE14',fontFamily: 'Markazi Text',fontWeight: 'bold', color:'black', width:'50%' }}>
                Reserve A Table
            </Button>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div>
          <Card className={classes.card} style={{ boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, .05)' }}>
            <img src={heroImg} alt="test" className={classes.img}/>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
