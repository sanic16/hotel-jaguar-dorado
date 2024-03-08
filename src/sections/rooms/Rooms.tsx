import Heading from '@/components/heading/Heading'
import React from 'react'
import { rooms_data } from '@/utils/data'
import Room from './Room'
import { FaArrowRight } from 'react-icons/fa'

import './rooms.css'

const Rooms = () => {
  return (
    <section className='rooms' id='rooms'>
        <Heading title='Nuestras Habitaciones' />

        <div className='container rooms__wrapper'>
            <div className='rooms__cards-wrapper'>
                {
                    rooms_data.map(room => (
                        <Room 
                            key={room.id}
                            title={room.title}
                            description={room.description}
                            price={room.price}
                            image={room.image}
                        />
                    ))
                }
            </div>
            <div className='rooms__btn-wrapper'>
                <a className='rooms__btn'>
                    Ver Más 
                    <span></span>
                </a>
            </div>  
        </div>
    </section>
  )
}

export default Rooms
