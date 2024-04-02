'use client'
import { useState } from 'react'
import ImageModal from './ImageModal'
import { 
    FaCircleChevronLeft, 
    FaCircleChevronRight,
    FaCircleXmark 
} from 'react-icons/fa6'
import Image from 'next/image'

const ImageGallery = (
    {
        images
    }:{
        images: GalleryImage[]
    }
) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleImageModal = (index: number) => {
    setSlideIndex(index)
    setOpenModal(true)
  } 

  const handleNextImage = () => {
    setSlideIndex(prev => (prev + 1) % images.length)
  }

  const handlePrevImage = () => {
    setSlideIndex(prev => (prev - 1 + images.length) % images.length)
  }


  return (
    <div>
        <div className='gallery__images'>
            {
                images.map(image => (
                    <div 
                        key={image.id}
                        className='image__wrapper'
                        onClick={() => handleImageModal(image.id - 1)}
                    >
                        <Image 
                            src={image.image} 
                            alt={`image ${image.id}`} 
                            className='footer__image'
                        />
                    </div>
                ))
            }
        </div>
        <ImageModal
            isOpen={openModal}
            closeImageModal={() => setOpenModal(false)}
            className='image__modal'
        >
            <div className='image__modal-content'>
                
                <div className='image__modal-fullscreen'>
                    <button 
                        className='btnClose'
                        onClick={() => setOpenModal(false)}
                    >
                        <FaCircleXmark />
                    </button>
                    <button 
                        className='btnPrev'
                        onClick={handlePrevImage}
                    >
                        <FaCircleChevronLeft />
                    </button>
                    <button 
                        className='btnNext'
                        onClick={handleNextImage}
                    >
                        <FaCircleChevronRight />
                    </button>
                    <Image src={images[slideIndex].image}  alt={`image ${images[slideIndex].id}`}/>
                </div>
                <div 
                    className='image__modal-prevImg'
                    onClick={handlePrevImage}
                >
                    <Image 
                        src={images[(slideIndex - 1 + images.length)%images.length].image}
                        alt='' 
                    />
                </div>

                <div className='image__modal-currentImg'>
                    <Image 
                        src={images[slideIndex].image}
                        alt='' 
                    />
                </div>

                <div 
                    className='image__modal-nextImg'
                    onClick={handleNextImage}
                >
                    <Image 
                        src={images[(slideIndex + 1)%images.length].image}  
                        alt=''
                    />
                </div>
            </div>
        </ImageModal>
    </div>
  )
}

export default ImageGallery