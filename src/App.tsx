import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FilmsList } from './FilmsList';
import Menu from './Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <FilmsList />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));
