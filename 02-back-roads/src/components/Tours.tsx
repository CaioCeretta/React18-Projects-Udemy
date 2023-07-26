import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

export default function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title="featured" subtitle="tours" />
          
      </div>

      <div className="section-center featured-center">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
