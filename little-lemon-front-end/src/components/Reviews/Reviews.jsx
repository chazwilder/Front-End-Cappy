import React from "react";
import { useStyles } from "./styles";
import { Card, Rating, Avatar } from "@mui/material";

const ratings = [
  {
    id: 1,
    rating: 8,
    name: "Brittany",
    review:
      "Food was great! Exactly as ordered with friendly and fast service. Would recommend and return.",
    getImageSrc: () => require("../images/brittany.png"),
  },
  {
    id: 2,
    rating: 9,
    name: "Stephanie",
    review:
      "I've driven past this place a few times, but never tried it, so I decided to give it a shot. Long story short, I'm glad I did. They have an open display of deserts when you first enter, which gets you thinking of what to order before you even eat.",
    getImageSrc: () => require("../images/steph.png"),
  },
  {
    id: 3,
    rating: 10,
    name: "Liz",
    review:
      "I love my Lamb Gyro!! The service is good, and is small place so that means NOT MUCH NOISE. The food is good and the deserts too. They do catering also.",
    getImageSrc: () => require("../images/liz.png"),
  },
  {
    id: 4,
    rating: 8.5,
    name: "Jim",
    review: "Good atmosphere and service. I enjoyed my Gyro and baklava.",
    getImageSrc: () => require("../images/jim.png"),
  },
];

const Reviews = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.reviews}>
        <div className={classes.container}>
          <div className={classes.colLg12}>
            <h1
              className={classes.h1}
              style={{
                alignSelf: "center",
                justifySelf: "center",
                textAlign: "center",
              }}
            >
              Testimonials
            </h1>
          </div>
          <div className={classes.row}>
            {ratings.map((rating) => (
              <div className={classes.colLg} key={rating.id}>
                <Card className={classes.card}>
                  <div className={classes.row} style={{ alignItems: "center" }}>
                    <div className={classes.colLg5}>
                      <p
                        className={classes.p}
                        style={{ fontFamily: "Markazi Text", fontSize: "20px" }}
                      >
                        Rating: {rating.rating} / 10
                      </p>
                    </div>
                    <div className={classes.colLg1}>
                      <Rating
                        value={rating.rating / 2}
                        name="read-only"
                        readOnly
                        precision={0.1}
                      />
                    </div>
                  </div>
                  <div className={classes.row}>
                    <div className={classes.colLg}>
                      <Avatar
                        src={rating.getImageSrc()}
                        sx={{ width: 100, height: 100, margin: "auto" }}
                      />
                    </div>
                    <div className={classes.colLg}>
                      <h2 className={classes.h2}>{rating.name}</h2>
                    </div>
                  </div>
                  <div className={classes.row}>
                    <div className={classes.colLg}>
                      <p className={classes.p}>{rating.review}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
