import { footer_contact, footer_images, hotelName, navigation_data } from '@/utils/data'
import Image from 'next/image'
import FooterForm from './FooterForm'

import './footer.css'
import { FaCss3, FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrHeroku } from 'react-icons/gr'
import ImageGallery from './ImageGallery'


const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <div className='container main__part'>
            <div className='footer__list-wrapper'>
                <h3 className='footer__heading'>
                    { hotelName }
                </h3>
                <ul className='footer__list'>
                    {
                        footer_contact.map(item => (
                            <li className='footer__list-item' key={item.id}>
                                <a href={item.url} className='footer__list-link'>{item.data}</a>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
            <div className="footer__list-wrapper">
                <h3 className='footer__heading'>
                    Explorar
                </h3>
                <ul className='footer__list'>
                    {
                        navigation_data.map(item => (
                            <li className='footer__list-item' key={item.id}>
                                <a href={item.url} className='footer__list-link'>
                                    { item.text }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='footer__contact'>
                <h3 className='footer__heading'>
                    Contacto
                </h3>
                <p>
                    Registrarse para recibir ofertas especiales
                </p>
                <FooterForm />
            </div>

            <div className='footer__gallery'>
                <h3 className='footer__heading'>
                    Galería
                </h3>
               <ImageGallery
                    images={footer_images}
                />
            </div>
        </div>
        <div className='container footer__creator'>
            <div className='copyright'>
                <p>
                    &copy; { new Date().getFullYear()} { hotelName }. Todos los derechos reservados.
                </p>
            </div>
            <div className='creator'>
                <p> Diseñado por <a href="#">Julio Sanic</a> con </p> <TbBrandNextjs /> <FaReact /> <FaCss3/> <GrHeroku />
            </div>
        </div>
    </footer>
  )
}

export default Footer