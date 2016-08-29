import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => (
  <p>
    Visible:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_TODO">
      Todo
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Done
    </FilterLink>
  </p>
)

export default Footer
