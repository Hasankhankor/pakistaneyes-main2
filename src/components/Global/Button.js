import { Bruno_Ace } from 'next/font/google';
import Link from 'next/link';

const Button = ({ name, color }) => {
  return (
    <button
      type="button"
      className={`py-4 text-white ${color} hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-2.5 mr-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-300`}
    >
      {name}
    </button>
  );
};

export default Button;
