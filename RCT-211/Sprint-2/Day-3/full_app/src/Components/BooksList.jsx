import React from 'react'

const BooksList = ({books}) => {
  return (
    <div>
        {books?.map((i) =>{
            return <div key={i.id}>
                <h1>{i.book_name}</h1>
            </div>
        })}
    </div>
  )
}

export default BooksList