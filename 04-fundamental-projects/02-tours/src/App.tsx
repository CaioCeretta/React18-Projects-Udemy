
import React, { useEffect, useState } from 'react'

import './index.css'
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

type Tour = {
  id: number;
  name: string;
  price: number;
  image: string;
  info: string
}

const App = () => {

  const [tours, setTours] = useState<Tour[]>([])

  useEffect(() => {
    async function fetchTours(url: string) {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const json = await response.json();

        setTours(json)
      } catch (error) {
        console.log('Error fetching tours', error)
      }
    }
    fetchTours(url)
  }, [])

  console.log(tours)

  return (
    <main>
      <header>
        <h3>Our Tours</h3>

      </header>
      <section className="tour-container">
          <Tours tours={tours} />
      </section>

    </main>
  )
};
export default App;
