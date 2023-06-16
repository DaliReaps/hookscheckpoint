import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'
const MovieCard = (props) => {
  var x=`/movie/${props.elem2.id}`
  return (
    <Link to={x} className='container'>
    <div >
            <img className='poster' src={props.elem2.posterURL} alt='poster'/>
    </div>

    <div className='Card'>
            <h2 className='headers'>Title:{props.elem2.title}</h2>
            
            <h2 className='headers'>Rating:{props.elem2.rating}</h2>
            
            <h2 className='headers'>Description:{props.elem2.description}</h2>
            
           
    </div>



 </Link>
    
  )
}

MovieCard.defaultProps={"title":"unknown","description":"unknown","posterURL":"not given","rating":0}
export default MovieCard