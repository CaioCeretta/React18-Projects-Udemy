import React from 'react'

export interface TourProps {
  tour: {
    id: number,
    src: any,
    date: string,
    title: string,
    text: string,
    location: string,
    duration: string,
    price: string
  }
}

export default function Tour({tour}: TourProps) {
  return (
    <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour.src} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              {tour.text}
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                {tour.location}
              </p>
              <p>{tour.duration}</p>
              <p>{tour.price}</p>
            </div>
          </div>
        </article>
  )
}
