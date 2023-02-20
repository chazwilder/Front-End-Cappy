import { Route, Switch } from "react-router-dom";
import { Footer, Nav, Hero,Specials,Reviews,About } from "./components";
import './index.css';

import { useStyles } from "./styles";

function App() {
  const classes = useStyles();
  return (
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

        </Route>
      </Switch>
          <Footer />
    </main>
    </div>
  );
}

export default App;
