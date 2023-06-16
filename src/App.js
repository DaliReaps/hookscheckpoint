import './App.css';
import MovieCard from './Component/MovieCard';
import MovieList from'./Component/MovieList';
import Filter from './Component/Filter'
import {useRef,useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Routes,Route } from 'react-router-dom';
import Trailer from './Component/Trailer';

function App() {
  const {v4: uuidv4}=require('uuid');
  const [movie,setMovie]=useState([
    {id:uuidv4() ,
    title:" The Shawshank Redemption",
    description:"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    posterURL:"https://top-10-beste.nl/wp-content/uploads/the-shawshank-redemption-1994-768x1140.jpg",
    rating:9.3,
  trailer:"https://www.youtube.com/embed/PLl99DlL6b4"},
    {id:uuidv4() ,
      title:"Fight Club",
    description:"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    posterURL:"https://th.bing.com/th/id/R.0675f02644c975b902535097511acba7?rik=3bIy0Ptohq3WvQ&pid=ImgRaw&r=0",
  rating:8.8,
  trailer:"https://www.youtube.com/embed/qtRKdVHc-cE" },
  
  {id:uuidv4() ,
  title:"The Green Mile",
  description:"A tale set on death row in a Southern jail, where gentle giant John possesses the mysterious power to heal people's ailments. When the lead guard, Paul, recognizes John's gift, he tries to help stave off the condemned man's execution.",
  posterURL:"https://image.tmdb.org/t/p/original/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
  rating:8.6,
trailer:"https://www.youtube.com/embed/Ki4haFrqSrw"}])

  const s=useRef("");
  const t=useRef("0");

  const r=useRef();
  const w=useRef();
  const x=useRef();
  const y=useRef();
  const z=useRef();
  const [searrate,setsearrate]=useState("")
  const [sear,setsear]=useState(0)



    const handlefiltre=()=>{
      setsear(t.current.value);
      setsearrate(s.current.value);
    }

 


  return (
    <Routes>
<Route path='/' element={<div >
      {/* filter part  */}


      <Filter t={t} s={s} handleFiltre={handlefiltre}  />
{/* adding movie part */}
      <form>
      <input type='text'  placeholder='Movie Title'  required ref={w} ></input>
      <input type='text'  placeholder='Movie Description' required ref={x} ></input>
      <input type='text'  placeholder='Movie posterURL' required ref={y} ></input>
      <input type='text'  placeholder='Movie Rating' required ref={z}  ></input>
      <input type='text'  placeholder='Trailer' required ref={r}  ></input>
      < button type="button" onClick={()=>{setMovie([...movie,{id:uuidv4() ,title:w.current.value,description:x.current.value,posterURL:y.current.value,
  rating:z.current.value}]);console.log(movie);}}>Add a movie</button>
    </form>
   
  {/* creating the movie list part */}

      <MovieList elem1={movie.filter(elem => elem.rating >= sear && elem.title.toLowerCase().trim().includes(searrate.toLowerCase().trim()))}/>
      
    </div>}/>
        <Route path='/movie/:id' element={<h1><Trailer movie={movie} /></h1>} />
    </Routes>
    
  );
}

export default App;
