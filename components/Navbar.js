import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">

      <div className="logo">
        <h1 className="text-[1.5rem]">Nav Logo</h1>
      </div>

      <ul className="nav-list m-0 p-0 flex text-[1.2rem]">

        <li className="nav-link px-2">
          <Link href="/">Home</Link>
        </li>

        <li className="nav-link px-2">
          <Link href="/about">About</Link>
        </li>

        <li className="nav-link px-2">
          <Link href="/services">Services</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar