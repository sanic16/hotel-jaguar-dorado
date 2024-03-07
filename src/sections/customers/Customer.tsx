import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Customer = (
    {
        image,
        comment,
        name,
        rating,
    }:{
        image: NextImage,
        comment: string,
        name: string,
        rating: number

    }
) => {
  return (  
    <div className='customer'>
        <div className='customer__image'>
            <Image src={image} alt='Customer' />
        </div>
        <div className='customer__content'>
            <span>
                <FaQuoteLeft />
            </span>
            <div className='customer__comment'>
                <p>
                    { comment }
                </p>
                <h5>
                    { name }
                </h5>
            </div>
        </div>
    </div>
  )
}

export default Customer