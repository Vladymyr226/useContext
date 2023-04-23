import React, { useContext } from 'react'
import { BookContext } from '../hooks/Context'

export const Book = (props) => {
  const { removeBook, addBook } = useContext(BookContext)
  return <h2 onClick={() => removeBook(props.id)}>{props.title}</h2>
}
