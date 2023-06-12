import React from 'react'
import './MovieCard.css'
const MovieCard = (props) => {
  return (
    <div className='container'>
      <div >
              <img className='poster' src={props.elem2.posterURL} alt='poster'/>
      </div>

      <div className='Card'>
              <h2 className='headers'>Title:{props.elem2.title}</h2>
              
              <h2 className='headers'>Rating:{props.elem2.rating}</h2>
              
              <h2 className='headers'>Description:{props.elem2.description}</h2>
             
      </div>



    </div>
  )
}

MovieCard.defaultProps={"title":"unknown","description":"unknown","posterURL":"not given","rating":0}
export default MovieCard