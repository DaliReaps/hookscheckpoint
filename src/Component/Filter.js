import React from 'react'

const Filter =({t,handleFiltre,s}) => {
  return (
    <div>
      <form>
      <input type='text'  placeholder='search by rating' ref={t}></input>
      <input type='text'  placeholder='search by title' ref={s}></input>
      </form>
     <button onClick={handleFiltre}>Search</button> 
     

    </div>
     
  )
}

export default Filter