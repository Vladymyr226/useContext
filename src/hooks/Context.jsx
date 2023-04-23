import React, { createContext, useState } from 'react'

export const BookContext = createContext()

export const Context = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Js' },
    { id: 2, title: 'React' },
    { id: 3, title: 'SQL' },
    { id: 4, title: 'C++' },
  ])

  const addBook = (book) => {
    setBooks([...books, book])
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const value = { books, addBook, removeBook }

  return <BookContext.Provider value={value}>{props.children}</BookContext.Provider>
}
