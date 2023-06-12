import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'

const MovieList = (props) => {
  
  return (
<>
<div className='Card1'>
        {props.elem1.map(ele=><MovieCard elem2={ele}/>)}
</div>
    
</>
    
  )
}

export default MovieList