import React, { ReactNode, createContext, useContext, useMemo, useState } from "react";

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

const TourProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tours, setTours] = useState<Tour[]>([]);

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