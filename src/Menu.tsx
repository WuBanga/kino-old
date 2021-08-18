import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Menu: FunctionComponent = () => {
  return (
    <div className="bg-yellow-400 flex flex-row text-3xl p-2 w-full justify-between">
      <Link to="/">
        <div className="mx-4">Kino</div>
      </Link>
      <input className="mx-4" type="text" />
      <button className="mx-4">Sign in</button>
    </div>
  );
};

export default Menu;
