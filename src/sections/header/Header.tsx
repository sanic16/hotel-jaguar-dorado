import './header.css'

import { hotelName } from '@/utils/data'
import { SiJaguar } from 'react-icons/si'

const Header = () => {
  return (
    <header className='header'>
        <div className='brand'>
            <div className='hotel-logo'>
                <SiJaguar />
            </div>
            <h3 className='hotel-heading'>
                { hotelName }
            </h3>
        </div>
        <div className="banner">
            <h1 className='banner-heading'>
                Bievenido a { hotelName }
            </h1>
            <p className='banner-paragraph'>
                Has tu reservación hoy y disfruta de nuestras ofertas
            </p>
            <button className="banner-button">
                Reservar ahora
            </button>
        </div>
    </header>
  )
}

export default Header