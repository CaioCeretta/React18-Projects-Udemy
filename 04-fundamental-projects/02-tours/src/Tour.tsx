import React from 'react'

type Tour = {
  tour: {
    id: number;
    name: string;
    price: number;
    image: string;
    info: string
  }
}

export default function ({ tour }: Tour) {

  const fullInfo = tour.info;

  const maxLength = 100;

  const truncatedInfo = fullInfo.length > maxLength ? fullInfo.substring(0, maxLength) + "..." : fullInfo


  return (
    <div key={tour.id} className="tour">
      <span className="price">{tour.price}</span>
      <div className="tour-image">
        <img src={tour.image} alt={tour.name} />
      </div>
      <div className="tour-details">
        <p><strong>{tour.name}</strong></p>
        <p>{truncatedInfo}</p>

      </div>
      <a href="#" className='read'>Read more</a>

      <button className='not-interested-button'> Not Interested </button>

    </div>
  )
}
