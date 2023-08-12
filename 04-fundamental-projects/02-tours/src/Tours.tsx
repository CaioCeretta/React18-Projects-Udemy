import React from 'react'
import Tour from './Tour';

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

export default function Tours({ tours }: ToursProps) {
  return (
    tours.map(tour => (
        <Tour tour={tour} />
      ))
  )
}
