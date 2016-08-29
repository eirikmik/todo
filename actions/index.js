
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: $r.store.getItems().length,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY',
    filter
  }
}


