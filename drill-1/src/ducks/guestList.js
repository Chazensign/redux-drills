const initialState = {
  guests: [
    {name:"Tony Stark",
    showEdit: false},
    {name:"Steve Rodgers",
    showEdit: false},
    {name:" Nick Fury",
    showEdit: false},
    {name:"Natasha Romanova",
    showEdit: false},
    {name:"Clint Barton",
    showEdit: false},
    {name:"Bruce Banner",
    showEdit: false},
    {name:"Wanda Maximoff",
    showEdit: false}
  ],
  newGuest: '',
  
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GUEST:
      return {guests:[...state.guests, {name: action.payload, showEdit: false}], newGuest: ''}
    case REMOVE_GUEST:
      let tempGuests = state.guests
      tempGuests.splice(action.payload, 1)
      return {guests: [...tempGuests]}
      case HANDLE_CHANGE:
        return{guests: [...state.guests], newGuest: action.payload}
        case TOGGLE_EDIT:
          let guest = {...state.guests[action.payload]}
          guest.showEdit = true
          console.log({
            ...state,
            [state.guests[action.payload]]: { ...guest }
          })
        return {[...state.guest, [state.guests[action.payload]]: {...guest}]}

      
      default: return state
  }

}

const ADD_GUEST = "ADD_GUEST"
const REMOVE_GUEST = "REMOVE_GUEST"
const HANDLE_CHANGE = "HANDLE_CHANGE"
const EDIT_GUEST = "EDIT_GUEST"
const TOGGLE_EDIT = "TOGGLE_EDIT"

export function addGuest(guest) {
  return {
    type: ADD_GUEST,
    payload: guest
  }
}
export function removeGuest(key) {
// let tempGuests = .guests
// tempGuests.splice(key, 1)
  return {
    type: REMOVE_GUEST,
    payload: key
  }
}
export function handleChange(input) {
  return {
    type: HANDLE_CHANGE,
    payload: input
  }
}
export function toggleEdit(index) {
  console.log(index)
return {
  type: TOGGLE_EDIT,
  payload: index
}
}

export default reducer
