export const contextState = {
    users: [
      {
        name: "shibin",
        age: 27,
      },
      {
        name: "Amar",
        age: 27,
      },
    ],
    place: []
  }
  export const contextReducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return state = { ...state, users: [...state.users, action.data] }
      case 'addPlace':
        return state = { ...state, place: [...state.place, action.data] }
      default:
        return state
    }
  }