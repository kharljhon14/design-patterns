import Link from 'next/link';

const HeaderNav = () => {
  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div>
        <span className="text-2xl">Design Patterns</span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto">
        <li className="mx-4 my-6 md:my-0">
          <Link className="text-xl hover:text-teal-500 duration-500" href="/">
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            className="text-xl hover:text-teal-500 duration-500"
            href="/form"
          >
            Reusable Components
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link
            className="text-xl hover:text-teal-500 duration-500"
            href="/builder"
          >
            Builder Pattern
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
