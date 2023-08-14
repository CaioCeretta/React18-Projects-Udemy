import React, { useContext } from 'react'
import Tour from './Tour';
import { TourContext } from './TourContext';

type Tour = {
  id: number;
  name: string;
  price: number;
  image: string;
  info: string

}

interface ToursProps {
  tours: Tour[]
}

export default function Tours() {

  const { tours, removeTour } = useContext(TourContext)

  return (
    tours.map(tour => (
      <Tour tour={tour} />
    ))
  )
}
