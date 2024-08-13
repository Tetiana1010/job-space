import Link from "next/link";

function Header () {
  return <header>
    <div className="flex justify-between items-center mx-auto">
      <Link href={'/'} className="font-bold text-xl">Job space</Link>
      <nav className="flex gap-2  *:py-2 *:px-4 *:rounded-md">
        <Link href={'/login'} className="bg-gray-200">Login</Link>
        <Link href={'/new-listing'} className="bg-blue-600 text-white">Post a job</Link>
      </nav>
    </div>
  </header>;
};

export default Header;