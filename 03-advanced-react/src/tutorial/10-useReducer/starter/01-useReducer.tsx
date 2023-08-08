import React, { useReducer } from 'react';
import { ACTION } from './actions';
import { data } from '../../../data';
import { reducer, Person } from './reducer';

export type StateType = {
  people: Person[]
}

const initialState: StateType = {
  people: data
}



const ReducerBasics = () => {
 
  const [state, dispatch] = useReducer(reducer, initialState)
  



  
  const removeItem = (id: number) => {
    dispatch({type: ACTION.REMOVE, payload: {id}})
  };

  const clearList = () => {
    dispatch({type: ACTION.CLEAR})
  }

  const resetPeople = () => {
    dispatch({type: ACTION.RESET})
    // setPeople(initialPeople)
  }

  return (
    <>
    {state.people.length > 0 ? (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={(id) => removeItem(person.id)}>remove</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={clearList}
      >
        clear items
      </button>
    </div>
    ): 


    <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={resetPeople}
      >Reset</button>
      }
    </>
  );
};

export default ReducerBasics;
