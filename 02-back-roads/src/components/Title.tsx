import React from "react";

interface props {
  title: string;
  subtitle: string
}

export default function Title({ title, subtitle }: props) {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  );
}
