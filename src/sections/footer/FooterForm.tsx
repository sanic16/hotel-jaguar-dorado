'use client'

import React from 'react'

const FooterForm = () => {
  return (
    <form 
        className='footer__form'
        onSubmit={(e) => e.preventDefault()}
    >
        <input type="text" className='footer__input' placeholder='Email...'/>
        <button
            className='footer__btn'
        >
            Registrarse
        </button>
    </form>
  )
}

export default FooterForm