import { ACTION } from "./actions";
import { data } from '../../../data';

export type Person = {
  id: number,
  name: string
}

export type StateType = {
  people: Person[]
}

const initialState: StateType = {
  people: data
}




export const reducer = (state: StateType, action: any) => {
  
  switch(action.type) {
    case ACTION.REMOVE:
      const {id} = action.payload;
      let newPeople = state.people.filter(person => person.id !== id);
      return {...state, people: newPeople}
      case ACTION.RESET:
      return {...state, people: data}
    case ACTION.CLEAR:
      console.log('aaa')
      return {...state, people: []}
    default:
      throw new Error(`Action type: ${action.type}. Not found`);

    
  }
}