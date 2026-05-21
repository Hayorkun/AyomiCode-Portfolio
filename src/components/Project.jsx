import React from 'react'

function Project() {

  const API_KEY = "6a0f1a006610dd3ae88162b0"
  console.log(API_KEY)

  async function fetchProject () {
   try {
     const response = await fetch(`https://api.jsonbin.io/v3/b/${API_KEY}`),

     const data = await response.json();

     console.log(data)
   } catch (error) {
    console.log(error)
   }
  } 

  return (
    <section>
      <h1>In progress</h1>
    </section>
  )
}

export default Project