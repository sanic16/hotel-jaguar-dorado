import React from 'react'
import { hotelName } from '@/utils/data'
import { FaSearch } from 'react-icons/fa'

import { navigation_data } from '@/utils/data'
import './navigation.css'
import useNavigationContext from '@/context/navigation-context'

const Navigation = () => {
  const { isOpen, toggle } = useNavigationContext()  
  return (
    <div className={`navigation ${isOpen ? 'show_navbar' : null}`}>
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
                        <a href={item.url} className='navigation-link' onClick={toggle}>
                            { item.text }
                        </a>
                    </li>
                ))
            }
        </ul>

        <div className='copyright'>
            <p>
                &copy; {new Date().getFullYear()} { hotelName }
            </p>
        </div>
    </div>
  )
}

export default Navigation
