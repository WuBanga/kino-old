import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FilmsList } from './FilmsList';
import Menu from './Menu';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
      </div>
      <div className="flex justify-center my-5">
        <FilmsList />
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));
