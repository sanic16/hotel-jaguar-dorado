import React from 'react'
import { motion } from 'framer-motion'
import { hotelName } from '@/utils/data'
import { FaSearch } from 'react-icons/fa'

import { navigation_data } from '@/utils/data'
import './navigation.css'
import useNavigationContext from '@/context/navigation-context'
import Link from 'next/link'

const Navigation = () => {
  const { isOpen, toggle } = useNavigationContext()  
  return (
    <motion.div 
        // initial={{
        //     left: '-32rem'
        // }}
        animate={{
            left: isOpen ? '8rem' : '-32rem'
        }}
        exit={{
            left: '-32rem'
        }}
        transition={{
            duration: .8
        }}
        className={`navigation`}
    >
        <div className="navigation-header">
            <h1 className='navigation-heading'>
                {hotelName}
            </h1>
            <form className='navigation-search'>    
                <input type="text" className='navigation-search-input' placeholder='Buscar...'/>
                <button className='navigation-search-btn'>
                    <FaSearch />
                </button>
            </form>
        </div>

        <ul className='navigation-list'>
            {
                navigation_data.map(item => (
                    <li key={item.id} className='navigation-item'>
                        <Link href={item.url} className='navigation-link' onClick={toggle}>
                            { item.text }
                        </Link>
                    </li>
                ))
            }
        </ul>

        <div className='copyright'>
            <p>
                &copy; {new Date().getFullYear()} { hotelName }
            </p>
        </div>
    </motion.div>
  )
}

export default Navigation
