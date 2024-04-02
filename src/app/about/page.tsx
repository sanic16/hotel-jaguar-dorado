import React from 'react'
import './about.css'
import { hotelName } from '@/utils/data'

export default function page() {
  return (
    <section className='about__page'>
        <div className="container about__page-container">
            <h1 className='page__title'>
                Acerca de Nosotros
            </h1>
            <p>El &quot;{hotelName}&quot;, ubicado en el pintoresco municipio de San Miguel Petapa, es un verdadero oasis de tranquilidad y comodidad. Fundado en el año 1980, este hotel ha sido un destino preferido tanto para turistas como para locales que buscan escapar del bullicio de la ciudad y disfrutar de la belleza natural que ofrece el lago de Amatitlán.</p>
            <p>Con una ubicación privilegiada a solo unos pasos del lago, el &quot;{hotelName}&quot; ofrece a sus huéspedes una experiencia única en un entorno natural espectacular. Desde sus inicios, el hotel se ha dedicado a brindar un servicio de calidad y a ofrecer una variedad de servicios para satisfacer las necesidades de sus visitantes.</p>
            <p>A lo largo de los años, &quot;{hotelName}&quot; ha ido evolucionando para adaptarse a las necesidades de sus huéspedes. En sus inicios, el hotel contaba con habitaciones sencillas pero acogedoras, ideales para aquellos que buscaban un lugar cómodo donde hospedarse durante su visita al lago de Amatitlán.</p>
            <p>Con el paso del tiempo, &quot;{hotelName}&quot; ha ido ampliando sus instalaciones y servicios para ofrecer una experiencia más completa a sus huéspedes. En la actualidad, el hotel cuenta con una variedad de habitaciones, desde cómodas habitaciones estándar hasta lujosas suites con vistas al lago.</p>
            <p>Además de sus confortables habitaciones, &quot;{hotelName}&quot; ofrece una serie de servicios e instalaciones para garantizar una estancia inolvidable. Los huéspedes pueden disfrutar de una refrescante piscina al aire libre, rodeada de exuberantes jardines y con vistas al lago. También pueden relajarse en el spa del hotel, donde se ofrecen una variedad de tratamientos rejuvenecedores y relajantes.</p>
            <p>Para los amantes de la buena comida, &quot;{hotelName}&quot; cuenta con un restaurante que ofrece una deliciosa selección de platos locales e internacionales. Los huéspedes también pueden disfrutar de una copa en el bar del hotel, que ofrece una amplia selección de bebidas y cócteles.</p>
            <p>Además de sus instalaciones y servicios, &quot;{hotelName}&quot; también ofrece una serie de actividades para sus huéspedes. Los visitantes pueden explorar los alrededores del lago en kayak o en bote, o disfrutar de un día de pesca en las aguas cristalinas del lago. También pueden realizar caminatas por los senderos cercanos o simplemente relajarse en la playa privada del hotel.</p>
            <p>En resumen, el &quot;{hotelName}&quot; es el lugar perfecto para aquellos que buscan una escapada tranquila y relajante en un entorno natural espectacular. Con su ubicación privilegiada junto al lago de Amatitlán, sus cómodas instalaciones y sus servicios de calidad, el Hotel Amatitlán garantiza una experiencia inolvidable para todos sus huéspedes.</p>

        </div>
    </section>
  )
}
