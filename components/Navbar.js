import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Nav List</h1>
      </div>
      <Link href="/" className="px-4">Home</Link>
      <Link href="/about" className="px-4">About</Link>
      <Link href="/services" className="px-4">Services</Link>
    </nav>
  )
}

export default Navbar