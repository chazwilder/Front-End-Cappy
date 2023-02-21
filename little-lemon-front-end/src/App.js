import { Route, Switch } from "react-router-dom";
import { Footer, Nav, Hero,Specials,Reviews,About,Reservations } from "./components";
import './index.css';

import { BookingProvider } from "./components/context/BookingContext";

import { useStyles } from "./styles";

function App() {
  const classes = useStyles();


  return (
    <>
    <BookingProvider>
    <div className={classes.root} style={{ background: '#FFFFFF' }}>
    <Nav />
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Switch>
        <Route exact path="/">
          <Hero />
          <Specials />
          <Reviews />
          <About />
        </Route>
        <Route exact path="/book">
          <Reservations />
        </Route>
      </Switch>
          <Footer />
    </main>
    </div>
    </BookingProvider>
    </>
  );
}

export default App;
