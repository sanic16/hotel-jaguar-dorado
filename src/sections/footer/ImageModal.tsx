import './imageModal.css'

const ImageModal = (
    {
        children,
        isOpen,
        className,
        closeImageModal
    }:{
        children: React.ReactNode
        isOpen: boolean,
        className?: string,
        closeImageModal: () => void
    }
) => {
  // avoid scrolling when the modal is open
   if(typeof window !== 'undefined'){
    if (isOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    } 
   }
  return (
    
    <>
        { isOpen && 
            <>
                <div 
                    className='backdrop__image'
                    onClick={closeImageModal}
                >

                </div>
                <div 
                    className={className}
                >
                    {children}
                </div>
            </>
        }
    </>
  )
}

export default ImageModal