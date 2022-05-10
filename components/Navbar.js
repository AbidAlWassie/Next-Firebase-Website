import Link from 'next/link'
import { useState, useEffect } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
      navbar.classList.toggle("open", isOpen);
  }, [isOpen]);

  return (
    <nav className="navbar flex justify-between items-center" id="navbar">

      {/* <div className="row"> */}
        <div className="logo">
          <h1 className="text-[1.5rem]">Nav Logo</h1>
        </div>

        <div className="menuBtn" id="menuBtn" onClick={()=> setIsOpen(!isOpen) }>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      {/* </div> */}

      <div className="row">
        <ul className="nav-list m-0 p-0 flex text-[1.2rem]">
          <li className="nav-link px-2">
            <Link href="/"><a draggable="false">Home</a></Link>
          </li>

          <li className="nav-link px-2">
            <Link href="/about"><a draggable="false">About</a></Link>
          </li>

          <li className="nav-link px-2">
            <Link href="/services"><a draggable="false">Services</a></Link>
          </li>  
        </ul>
      </div>

    </nav>
  )
}

export default Navbar