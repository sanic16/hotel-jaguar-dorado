import React from 'react'
import { social_data } from '@/utils/data'

import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='navbar'>
        <div className='sidebar'> 

            <div className='menu-icon'>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
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
    </div>
  )
}

export default Sidebar