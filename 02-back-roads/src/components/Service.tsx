import React from 'react'

interface ServiceProps {
  service: {
    id: number,
    title: string,
    text: string,
    icon: string;

  }
}

export default function Service({service}: ServiceProps) {
  return (
    <article key={service.id} className="service">
        <span className="service-icon">
          <i className={service.icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{service.title}</h4>
          <p className="service-text">
            {service.text}
          </p>
        </div>
      </article>
  )
}
