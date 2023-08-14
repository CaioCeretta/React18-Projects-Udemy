import React, { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";

interface Tour {
  id: number;
  name: string;
  info: string;
  image: string;
  price: number;
}

interface TourContextType {
  tours: Tour[];
  removeTour: (id: number) => void;
}

const TourContext = createContext<TourContextType>({
  tours: [],
  removeTour: () => {},
});

const url = 'https://course-api.com/react-tours-project';


function TourProvider({ children }: { children: ReactNode }) {
  const [tours, setTours] = useState<Tour[]>([]);


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


  const removeTour = (id: number) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const values = useMemo(() => {
    return {
      tours,
      removeTour,
    };
  }, [tours, removeTour]);

  return <TourContext.Provider value={values}>{children}</TourContext.Provider>;
};

export { TourContext, TourProvider };