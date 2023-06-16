import React from 'react'
import './MovieCard.css'
import { Link, useParams } from 'react-router-dom'
const Trailer = ({movie}) => {
    const params=useParams()
    
    var x=movie.filter(elem=>elem.id==params.id)
  return (
    <div className='Trailer'>
            <h2 className='headers2'>Title:{x[0].title}</h2>
            
    
    <iframe width="560" height="315" src={x[0].trailer}  allowfullscreen></iframe>

            
            <h2 className='headers2'>Description:{x[0].description}</h2>
            
           <Link to='/'  >
            <button >Home Page</button>
           </Link>
    </div>
  )
}

export default Trailer