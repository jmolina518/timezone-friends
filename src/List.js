import React from 'react'
import DateTime from './components/DateTime'

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, timezone } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{timezone}</p>
              <p>
                <DateTime timezone={timezone} />
              </p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
