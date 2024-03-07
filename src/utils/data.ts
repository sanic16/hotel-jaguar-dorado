export const hotelName = 'Hotel El Jaguar Dorado'

import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGooglePlusG } from "react-icons/fa"


export const social_data = [
    {
        id: 1,
        icon: FaFacebook,
        url: "https://www.facebook.com"
    },
    {
        id: 2,
        icon: FaTwitter,
        url: "https://www.twitter.com" 
    },
    {
        id: 3,
        icon: FaInstagram,
        url: "https://www.instagram.com"
    },
    {
        id: 4,
        icon: FaGooglePlusG,
        url: "https://www.google.com"
    }
]

export const navigation_data = [
    {
        id: 1,
        text: "Inicio",
        url: "#home"
    },
    {
        id: 2,
        text: "Nosotros",
        url: "#about"
    },
    {
        id: 3,
        text: "Habitaciones",
        url: "#rooms"
    },
    {
        id: 4,
        text: "Clientes",
        url: "#customers"
    },
    {
        id: 5,
        text: "Eventos",
        url: "#events"
    },
    {
        id: 6,
        text: "Contacto",
        url: "#contact"
    }

]

import singleRoom from '../../public/images/single-room.jpeg'
import doubleRoom from '../../public/images/double-room.jpeg'
import lux from '../../public/images/lux.jpeg'
import vip from '../../public/images/vip.jpeg'

export const rooms_data = [
    {
        id: 1,
        image: singleRoom,
        title: 'Habitación Individual',
        description: 'Disfruta de una habitación individual con todas las comodidades.', 
        price: 799.00
    },
    {
        id: 2,
        image: doubleRoom,
        title: 'Habitación Doble',
        description: 'Disfruta de una habitación doble con todas las comodidades.',
        price: 999.00
    },
    {
        id: 3,
        image: lux,
        title: 'Habitación Premium',
        description: 'Disfruta de una habitación premium con todas las comodidades.',
        price: 1499.00
    },
    {
        id: 4,
        image: vip,
        title: 'Habitación VIP',
        description: 'Disfruta de una habitación VIP con todas las comodidades.',
        price: 1999.00
    }
]

import client_image_1 from '@/../public/images/customer-1.jpg'
import client_image_2 from '@/../public/images/customer-2.jpg'
import client_image_3 from '@/../public/images/customer-3.jpg'
import client_image_4 from '@/../public/images/customer-4.jpg'
import client_image_5 from '@/../public/images/customer-5.jpg'
import client_image_6 from '@/../public/images/customer-6.jpg'

export const customers_data: Customer[] = [
    {
        id: 1,
        image: client_image_1,
        comment: 'El mejor hotel en el que he estado. La comida es deliciosa y el servicio es excelente.',
        name: 'Ana López',
        rating: 5
    },
    {
        id: 2,
        image: client_image_2,
        comment: 'Excelente servicio al cliente y habitaciones muy cómodas. ¡Volveré sin duda!',
        name: 'Elena Martínez',
        rating: 4
    },
    {
        id: 3,
        image: client_image_3,
        comment: 'Una experiencia increíble. El personal es muy amable y las instalaciones son de primera.',
        name: 'Sofía Smith',
        rating: 5
    },
    {
        id: 4,
        image: client_image_4,
        comment: 'Muy buena ubicación y vistas espectaculares. Recomendado para unas vacaciones relajantes.',
        name: 'Elmer García',
        rating: 4
    },
    {
        id: 5,
        image: client_image_5,
        comment: 'El hotel cuenta con todas las comodidades necesarias para una estadía placentera. ¡Volveré pronto!',
        name: 'Emilio Sanchez',
        rating: 5
    },
    {
        id: 6,
        image: client_image_6,
        comment: 'El servicio es excelente y el personal es muy amable. ¡Muy recomendado!',
        name: 'Jane Doe',
        rating: 4
    }
];

import event_image_1 from '@/../public/images/event-1.jpg'
import event_image_2 from '@/../public/images/event-2.jpg'
import event_image_3 from '@/../public/images/event-3.png'
import event_image_4 from '@/../public/images/event-4.jpg'


export const events_data = [
    {
        id: 1,
        title: 'Halloween',
        date: '31 de Octubre',
        description: 'Celebra Halloween con nosotros y disfruta de una noche llena de diversión y sorpresas.',
        image: event_image_1
    },
    {
        id: 2,
        title: 'Día de los Muertos',
        date: '2 de Noviembre',
        description: 'Ven a celebrar el Día de los Muertos con nosotros y disfruta de una noche llena de tradición y cultura.',
        image: event_image_2
    },
    {
        id: 3,
        title: 'Boda de María y Juan',
        date: '15 de Noviembre',
        description: 'Los invitados a la boda de María y Juan podrán disfrutar de una noche de lujo y diversión.',
        image: event_image_3
    },
    {
        id: 4,
        title: 'Concierto de Marimba',
        date: '20 de Noviembre',
        description: 'La mejor marimba de Guatemala se presentará en nuestro hotel. ¡No te lo pierdas!',
        image: event_image_4
    }
]

export const footer_contact = [
    {
        id: 1,
        data: 'elgranhotel@email.com',
        url: 'mailto:elgranhotel@email.com'
    },
    {
        id: 2,
        data: 'San Miguel Petapa, Guatemala',
        url: 'https://goo.gl/maps/1' 
    },
    {
        id: 3,
        data: '+502 5555-5555',
        url: 'tel:+50255555555'
    }
]



import gallery_image_1 from '../../public/images/gallery-img-1.jpeg'
import gallery_image_2 from '../../public/images/gallery-img-2.jpeg'
import gallery_image_3 from '../../public/images/gallery-img-3.jpeg'
import gallery_image_4 from '../../public/images/gallery-img-4.jpeg'
import gallery_image_5 from '../../public/images/gallery-img-5.jpeg'
import gallery_image_6 from '../../public/images/gallery-img-6.jpeg'

export const footer_images = [
    {
        id: 1,
        image: gallery_image_1
    },
    {
        id: 2,
        image: gallery_image_2
    },
    {
        id: 3,
        image: gallery_image_3
    },
    {
        id: 4,
        image: gallery_image_4
    },
    {
        id: 5,
        image: gallery_image_5
    },
    {
        id: 6,
        image: gallery_image_6
    }
]

