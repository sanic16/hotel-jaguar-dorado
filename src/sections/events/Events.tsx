import Heading from '@/components/heading/Heading'
import './events.css'
import { events_data } from '@/utils/data'
import Event from './Event'
import './events.css'

const Events = () => {
  return (
    <section className='events' id='events'>
        <Heading title='Próximos Eventos' />
        <div className='container'>
            <div className='events__wrapper'>
                {
                    events_data.map(event => (
                        <Event
                            key={event.id}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            image={event.image}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Events