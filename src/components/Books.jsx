import React from 'react'
import { Book } from './Book'
import { useContext } from 'react'
import { BookContext } from '../hooks/Context'

export const Books = () => {
  const { books } = useContext(BookContext)
  return (
    <div>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </div>
  )
}
