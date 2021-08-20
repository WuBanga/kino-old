import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Menu: FunctionComponent = () => {
  return (
    <div className="bg-yellow-400 flex flex-wrap py-2 px-5 w-full justify-between gap-2">
      <div className="text-4xl font-medium">Kᴉno</div>
      <input
        className="text-xl w-full rounded-lg sm:w-1/2 sm:order-none order-2 p-2"
        type="text"
        placeholder="Search film"
      />
      <button className="text-2xl text-red-600 text-right">Sign in</button>
    </div>
  );
};

export default Menu;
