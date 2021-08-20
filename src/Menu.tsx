import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Menu: FunctionComponent = () => {
  return (
    <div className="bg-yellow-400 flex flex-row text-3xl py-2 px-5 w-full justify-between">
      <div className="w-1/5">Kᴉno</div>
      <input className="rounded-lg w-1/2" type="text" />
      <button className="w-1/5 text-red-600 text-right">Sign in</button>
    </div>
  );
};

export default Menu;
