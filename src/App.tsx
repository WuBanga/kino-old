import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));
