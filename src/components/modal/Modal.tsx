'use client'
import useNavigationContext from "@/context/navigation-context"
import './modal.css'

const Modal = () => {
  const { isOpen, toggle } = useNavigationContext()  
  return isOpen && (
    <div
        className='backdrop'
        onClick={toggle}
    >

    </div>
  )
}

export default Modal