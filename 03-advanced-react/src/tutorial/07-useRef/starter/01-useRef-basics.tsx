// import React, { FormEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react';

// const UseRefBasics = () => {
//   const [value, setValue] = useState(0);
//   const refContainer: HTMLInputElement = useRef<HTMLInputElement>(null)
//   const isMounted = useRef(false)

//   useEffect(() => {
//     refContainer.current.focus()
//   })

//   useEffect(() => {
//     if(!isMounted.current) {
//       isMounted.current = true;
//       return;
//     }
//     console.log('re-render')
//   }, [value])

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if(refContainer.current) {
//       const name = refContainer.current.value;
//         }
//   };



//   return (
//     <div>
//       <form className='form' onSubmit={handleSubmit}>
//         <div className='form-row'>
//           <label htmlFor='name' className='form-label'>
//             Name
//           </label>
//           <input type='text' id='name' className='form-input' ref={refContainer}/>
//         </div>
//         <button type='submit' className='btn btn-block'>
//           submit
//         </button>
//       </form>
//       <h1>value : {value}</h1>
//       <button onClick={() => setValue(value + 1)} className='btn'>
//         increase
//       </button>
//     </div>
//   );
// };

// export default UseRefBasics;