import AboutUs from '@/sections/aboutUs/AboutUs'
import Customers from '@/sections/customers/Customers'
import Events from '@/sections/events/Events'
import Header from '@/sections/header/Header'
import Rooms from '@/sections/rooms/Rooms'

export default function page() {
  return (
    <>
      <Header />
      <AboutUs />
      <Rooms />
      <Customers />
      <Events /> 
    </>
  )
}
