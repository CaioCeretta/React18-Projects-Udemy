
import React, { useEffect, useState } from 'react'

import './index.css'
import Tours from './Tours';
import { TourProvider } from './TourContext';

const url = 'https://course-api.com/react-tours-project';

type Tour = {
  id: number;
  name: string;
  price: number;
  image: string;
  info: string
}

const App = () => {



  return (
    <TourProvider>
    <main>
      <header>
        <h3>Our Tours</h3>
      </header>
      <section className="tour-container">
          <Tours />
      </section>
    </main>
    </TourProvider>

  )
};
export default App;
