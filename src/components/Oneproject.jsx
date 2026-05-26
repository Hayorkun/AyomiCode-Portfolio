import React from 'react'

function Oneproject({ name, description, image }) {
  return (
    <div>
      <p>{name}</p>

      <p>{description}</p>

      <img src={image} alt="" />
    </div>
  )
}

export default Oneproject