import CardButton from '@/components/buttons/CardButton'
import Image from 'next/image'
import React from 'react'
import { FaCalendar } from 'react-icons/fa'

const Event = (
    {
        title,
        date,
        description,
        image
    }:{
        title: string,
        date: string,
        description: string,
        image: NextImage
    }
) => {
  return (
    <div className='event'>
        <div className='event__image'>
            <Image src={image} alt={title} />
        </div>
        <div className='event__info'>
            <h4>{ title }</h4>
            <p>{ description }</p>
            <p> <FaCalendar /> { date }</p>
            <div className='event__btn-wrapper'>
                <CardButton className='event__btn'>
                    Ver más
                </CardButton>
            </div>
            
        </div>
    </div>
  )
}

export default Event