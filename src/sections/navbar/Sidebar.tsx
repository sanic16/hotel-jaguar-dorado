'use client'
import React from 'react'
import { social_data } from '@/utils/data'
import './sidebar.css'
import Navigation from './Navigation'
import useNavigationContext from '@/context/navigation-context'
import { AnimatePresence } from 'framer-motion'

const Sidebar = () => {
  const { isOpen, toggle } = useNavigationContext()
  if(typeof window !== 'undefined'){ 
    isOpen ? window.document.body.classList.add('modal-open') : window.document.body.classList.remove('modal-open') 
  } 
  return (
    <div className='navbar'>
        <div className='sidebar'> 
            <div className='menu-icon' onClick={toggle}>
                <div className={`line line-1 ${isOpen ? 'open' : null}`}></div>
                <div className={`line line-2 ${isOpen ? 'open' : null}`}></div>
                <div className={`line line-3 ${isOpen ? 'open' : null}`}></div>
            </div>

            <ul className="social-icons-list">
                {
                    social_data.map(social => (
                        <li key={social.id}>
                            <a href={social.url} className='social-link'>
                                { <social.icon />}
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div className="year">
                <p>
                    {new Date().getFullYear()}
                </p>
            </div>
        </div>

        <AnimatePresence>
            { isOpen && <Navigation />}
            {/* { isOpen && <Modal />} */}
        </AnimatePresence>
    </div>
  )
}

export default Sidebar