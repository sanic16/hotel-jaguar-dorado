'use client'
import { motion } from 'framer-motion'
import './header.css'

import { hotelName } from '@/utils/data'
import { FaCrown } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {
  const { 0: text } = useTypewriter({
    words: [hotelName, 'mejor hotel'],
    loop: 0,
    deleteSpeed: 50,
    typeSpeed: 100,
  })  
  return (
    <header className='header' id='home'>
        <div className='brand'>
            <div className='hotel-logo'>
                <FaCrown />
            </div>
            <h3 className='hotel-heading'>
                { hotelName }
            </h3>
        </div>
        <div className="banner">
            <h1 className='banner-heading'>
               Bienvenido al <span className='banner-key'>
                    { text } <Cursor />
               </span>
            </h1>
            <p className='banner-paragraph'>
                Has tu reservación hoy y disfruta de nuestras ofertas
            </p>
            <button 
               
                className="banner-button"
            >
                Reservar ahora
            </button>
        </div>
    </header>
  )
}

export default Header