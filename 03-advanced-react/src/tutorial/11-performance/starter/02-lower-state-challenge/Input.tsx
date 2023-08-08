import React, { useState, InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>
  { name: string, fnOnChange: (val: string) => void }

export default function Input({ name, fnOnChange, ...rest }: InputProps) {

  

  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        name
      </label>
      <input {...rest} onChange={(e) => fnOnChange(e.target.value)} name={name} />

    </div>
    )

}