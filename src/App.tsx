import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FilmsList } from './FilmsList';
import Menu from './Menu';
import { FilmPage } from './FilmPage';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/movie/:id">
          <FilmPage />
        </Route>
        <Route path="/">
          <FilmsList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));
