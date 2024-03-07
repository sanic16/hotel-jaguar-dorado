import Heading from '@/components/heading/Heading'
import './customers.css'
import { customers_data } from '@/utils/data'
import Customer from './Customer'

const Customers = () => {
  const randomIndex = Math.floor(Math.random() * (customers_data.length - 1))
  let slicedElements = []
  
  for(let i=0; i < 3; i++){
    const index = (randomIndex + i)% customers_data.length
    slicedElements.push(customers_data[index])
  } 
    
  return (
    <section className='customers' id='customers'>
        
        <div className='container customers__wrapper'>
            <div className='customers__left'>
                <div className='customers__left-wrapper'>
                    <Heading title='Nuestros Clientes' />
                    <p>
                        Más de 50 clientes que han visitado nuestro hotel han dejado su opinión en nuestra página de internet.  
                    </p>
                    <p>
                        Hemos recibido comentarios positivos y negativos, pero siempre estamos dispuestos a mejorar.
                    </p>
                    <p>
                        Si tienes alguna opinión sobre nuestro hotel, no dudes en dejarnos un comentario.
                    </p>
                    <a href="#">
                        Ver más comentarios
                    </a>
                </div>

            </div>
            <div className='customers__right'>
                {
                    slicedElements.map(customer => (
                        <Customer
                            key={customer.id}
                            image={customer.image}
                            comment={customer.comment}
                            name={customer.name}
                            rating={customer.rating}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Customers