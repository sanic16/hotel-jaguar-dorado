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
        text: "Eventos",
        url: "#events"
    },
    {
        id: 5,
        text: "Clientes",
        url: "#customers"
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

// import client1 from '../assets/customer-1.jpeg'
// import client2 from '../assets/customer-2.jpeg'

// const customers = [
//     {
//         id: 1,
//         name: 'María Gonzales',
//         quote: 'Es un lugar agradable, me encanta la comida y el ambiente! El personal es muy amable y siempre está dispuesto a ayudar.',
//         job: 'Cliente',
//         avatar: client1
//     },
//     {
//         id: 2,
//         name: 'Carlos Pérez',
//         quote: 'El mejor lugar para descansar y disfrutar de la naturaleza. La comida es deliciosa y el personal es muy amable.',
//         job: 'Turista Extranjero',
//         avatar: client2
//     }
// ]

// const footer_contact = [
//     {
//         id: 1,
//         data: 'elgranhotel@email.com'
//     },
//     {
//         id: 2,
//         data: 'San Miguel Petapa, Guatemala'
//     },
//     {
//         id: 3,
//         data: '+502 5555-5555'
//     }
// ]

// const footer_navigation = [
//     {
//         id: 1,
//         text: 'Inicio',
//         url: '#home'
//     },
//     {
//         id: 2,
//         text: 'Nosotros',
//         url: '#about'
//     },
//     {
//         id: 3,
//         text: 'Habitaciones',
//         url: '#rooms'
//     },
//     {
//         id: 4,
//         text: 'Eventos',
//         url: '#events'
//     },
//     {
//         id: 5,
//         text: 'Clientes',
//         url: '#customers'
//     },
//     {
//         id: 6,
//         text: 'Contacto',
//         url: '#contact'
//     }
// ]

// import gallery_image_1 from '../assets/gallery-img-1.jpeg'
// import gallery_image_2 from '../assets/gallery-img-2.jpeg'
// import gallery_image_3 from '../assets/gallery-img-3.jpeg'
// import gallery_image_4 from '../assets/gallery-img-4.jpeg'
// import gallery_image_5 from '../assets/gallery-img-5.jpeg'
// import gallery_image_6 from '../assets/gallery-img-6.jpeg'

// const footer_images = [
//     {
//         id: 1,
//         image: gallery_image_1
//     },
//     {
//         id: 2,
//         image: gallery_image_2
//     },
//     {
//         id: 3,
//         image: gallery_image_3
//     },
//     {
//         id: 4,
//         image: gallery_image_4
//     },
//     {
//         id: 5,
//         image: gallery_image_5
//     },
//     {
//         id: 6,
//         image: gallery_image_6
//     }
// ]

// export { 
//     social_data,
//     navigation_data,
//     rooms_data,
//     customers,
//     footer_contact,
//     footer_navigation,
//     footer_images
// }