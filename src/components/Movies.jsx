import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pagination from './Pagination'

const Movies = ({AddtoWatchlist,  WatchList,RemovefromWatchlist}) => {
 const[movies,Setmovies]=useState([])
 const[pageNo , setPage]=useState(1)
  
 let forward= ()=>{
    setPage(pageNo+1)
 }

 let backward = ()=>{
    if(pageNo===1){
        setPage(1)
    }
    else
    setPage(pageNo-1)
 }

  useEffect(()=>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=58a4bf2e566abf5696556cee81d76f27&page=${pageNo}`).then((res)=>{
       Setmovies(res.data.results)
      console.log(movies)
       
  })

  },[pageNo])
  return (
    <>
    <div className='p-5'>
        <div className='text-2xl  m-5 text-center font-bold '> 
            Trending movies
        </div>
        <div className='flex flex-row  flex-wrap justify-evenly'>
            {movies.map((movieData)=>{
            return <Moviecard  WatchList={WatchList} key ={movieData.id}movieData={movieData} poster_path={movieData.poster_path} title ={movieData.original_title} AddtoWatchlist={AddtoWatchlist} RemovefromWatchlist={RemovefromWatchlist}/>
            })}
      
        </div>
      

    </div>
    <Pagination nextPage={forward} prevPage={backward} Page={pageNo} />
    </>
  )
} 

export default Movies