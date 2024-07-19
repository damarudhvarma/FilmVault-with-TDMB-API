
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Watchlist from './components/Watchlist'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
const [WatchList , setWatchList] = useState([])

 let AddtoWatchlist= (movieData)=>{
  let newWatchlist= [...WatchList,movieData];
  localStorage.setItem('Movies_App',JSON.stringify(newWatchlist))
  setWatchList(newWatchlist)
 
 }

 let RemovefromWatchlist=(movieData)=>{
  let filteredWatchlist= WatchList.filter((movie)=>{
    
    return movie.id != movieData.id
  })
  localStorage.setItem('Movies_App',JSON.stringify(filteredWatchlist))
  setWatchList(filteredWatchlist)
 }

 useEffect(()=>{
  let DataofLocalStorage = localStorage.getItem('Movies_App')
  if(!DataofLocalStorage){
    return
  }
  setWatchList(JSON.parse(DataofLocalStorage))
 },[])
  return (
    <>
    <BrowserRouter>
     <Navbar/>

     
      <Routes>
<Route path='/' element={<><Banner/><Movies WatchList={WatchList} AddtoWatchlist={AddtoWatchlist} RemovefromWatchlist={RemovefromWatchlist} /></>}/>
<Route path='/watchlist' element={<><Watchlist WatchList={WatchList} setWatchList={setWatchList} RemovefromWatchlist={RemovefromWatchlist} /> </>}/>
         
         
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
