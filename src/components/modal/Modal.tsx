'use client'
import useNavigationContext from "@/context/navigation-context"
import './modal.css'
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

const Modal = () => {
  const { isOpen, close } = useNavigationContext()  
  return (
    <>
    <AnimatePresence>
      { isOpen && (
        <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: .8
            }}
            className='backdrop'
            onClick={close}
        >

        </motion.div>)
      }
    </AnimatePresence>
    </>
  )
}

export default Modal