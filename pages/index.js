import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="Home">
        <h1>Homepage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus omnis rem molestiae quo animi, aspernatur doloremque velit suscipit reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus omnis rem molestiae quo animi, aspernatur doloremque velit suscipit reprehenderit.</p>
      </div>
      <Footer/>
    </div>
  )
}
