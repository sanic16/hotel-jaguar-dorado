import Heading from '@/components/heading/Heading'
import { hotelName } from '@/utils/data'
import React from 'react'
import image1 from '@/../public/images/about-us-img-1.jpeg'
import image2 from '@/../public/images/about-us-img-2.jpeg'
import image3 from '@/../public/images/about-us-img-3.jpeg'
import image4 from '@/../public/images/about-us-img-4.jpeg'
import Image from 'next/image'

import './aboutUs.css'

const AboutUs = () => {
  return (
    <section className='aboutUs' id='about'>
        <div className='container aboutUs__wrapper'>
            <div className=' aboutUs__content'>
                <Heading title='Acerca de Nosotros' className='aboutUs__heading'/>
                <h3 className='aboutUs__subHeading'>
                { hotelName }
                </h3>
                <p className='aboutUs__text'>
                    Somos un hotel de categor&iacute;a a úbicado en el municipio de San Miguel Petapa, Guatemala.
                    Estamos frente al lago de Amatitl&aacute;n y al parque ecol&oacute;gico &quot;La Serra&quot; lo que nos hace un lugar ideal para el descanso y la relajación.
                </p>
                <a className='aboutUs__btn'>
                    Leer Más
                </a>
            </div>
            <div className='aboutUs__images'>
                <Image src={image1} alt='about us image 1' className='image image-1'/>
                <Image src={image2} alt='about us image 2' className='image image-2'/>
                <Image src={image3} alt='about us image 3' className='image image-3'/>
                <Image src={image4} alt='about us image 4' className='image image-4'/>
            </div>
        </div>

    </section>
  )
}

export default AboutUs