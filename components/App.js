import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import FilteredTodoList from './FilteredTodoList'

const App = () => (
  <div>
    <AddTodo />
    <FilteredTodoList />
    <Footer />
  </div>
)

export default App
