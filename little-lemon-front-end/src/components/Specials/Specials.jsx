import React from "react";
import { useStyles } from "./styles";
import { Button, Grid, Card } from "@mui/material";
import ElectricScooter from "@mui/icons-material/ElectricScooter";


const foodSpecials = [
    {
      title: "Greek Salad",
      price: 12.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../images/salad.png"),

    },
    {
      title: "Bruchetta",
      price: 5.99,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../images/brus.png"),

    },
    {
      title: "Lemon Dessert",
      price: 5.00,
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../images/lemoncake.png"),
    },
  ];

const Specials = () => {
  const classes = useStyles();

  return (
    <div className={classes.special}>
      <div className={classes.row} style={{ justifyContent: 'center',alignItems:'baseline', background:'white' }}>
          <div className={classes.column}>
            <h1>Our Specials</h1>
          </div>
          <div className={classes.column}>
            <Button style={{ background: '#F4CE14',fontFamily: 'Markazi Text',fontWeight: 'bold', color:'black', width:'50%'}}>
                Online Menu
            </Button>
          </div>
      </div>
      <Grid container spacing={2} sx={{marginLeft:'auto',marginRight:'auto', marginTop:'40px',maxWidth:'60%',marginBottom:'40px'}}>

        {foodSpecials.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Card className={classes.card} style={{background:'#EDEFEE'}}>
              <img src={project.getImageSrc()} alt={project.title} className={classes.img}/>
              <div className={classes.cardContent}>
                <div className={classes.row} style={{justifyContent: 'space-between',width:'100%',background:'#EDEFEE'}}>
                <h3>{project.title}</h3>
                <h4 style={{justifySelf:'end'}}>${project.price}</h4>
                </div>
                <p>{project.description}</p>
              </div>
                <a href="/" className={classes.orders}>Order a delivery <ElectricScooter fontSize="medium"/></a>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Specials;
