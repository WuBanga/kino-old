import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FilmsList } from './FilmsList';
import Menu from './Menu';
import { FilmPage } from './FilmPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Menu />
        <Switch>
          <Route path="/movie/:id">
            <FilmPage />
          </Route>
          <Route path="/">
            <FilmsList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));
