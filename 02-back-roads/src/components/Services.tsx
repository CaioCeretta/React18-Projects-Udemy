import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service'

export default function Services() {
  return (
    <section className="section services" id="services">
    <div className="section-title">
      <Title title='our' subtitle='services' />
      
    </div>
    <div className="section-center services-center">
    {services.map(service => (
       <Service service={service} key={service.id} />
    ))}
    </div>
  </section>
)
}
