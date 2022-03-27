import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./Pages/MovieDetails";
import { LandingPage } from "./Pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
        <Link to="/">
          <h1 className={styles.title}>Movie222s</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
