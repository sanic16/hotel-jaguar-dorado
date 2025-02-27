import Heading from '@/components/heading/Heading'
import { hotelName } from '@/utils/data'
import React from 'react'
import image1 from '@/../public/images/about-us-img-1.jpeg'
import image2 from '@/../public/images/about-us-img-2.jpeg'
import image3 from '@/../public/images/about-us-img-3.jpeg'
import image4 from '@/../public/images/about-us-img-4.jpeg'
import Image from 'next/image'

import './aboutUs.css'
import Link from 'next/link'

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
                <Link href={'/about'} 
                    className='aboutUs__btn'
                >
                    Leer Más
                </Link>
            </div>
            <div className='aboutUs__images'>

                <div className='aboutUs__image-wrapper about__img1'>
                    <Image src={image1} alt='about us image 1' />
                </div>
                <div className='aboutUs__image-wrapper about__img2'>
                    <Image src={image2} alt='about us image 2' />
                </div>
                <div className='aboutUs__image-wrapper about__img3'>
                    <Image src={image3} alt='about us image 3' />
                </div>
                <div className='aboutUs__image-wrapper about__img4'>
                    <Image src={image4} alt='about us image 4' />
                </div>

            </div>
        </div>

    </section>
  )
}

export default AboutUs