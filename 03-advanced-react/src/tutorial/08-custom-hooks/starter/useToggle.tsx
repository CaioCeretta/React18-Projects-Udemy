import React, { useState } from 'react'

export default function useToggle(defaultValue: boolean) {
  const [show, setShow] = useState(defaultValue)
  const toggle = () => {
    setShow(!show);
  }
  return {show, toggle}
}
