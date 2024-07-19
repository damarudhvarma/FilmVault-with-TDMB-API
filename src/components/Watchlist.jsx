import React, { useEffect, useState } from 'react'
import geners from '../utilitis/genres'
const Watchlist = ({movieData,setWatchList,WatchList,RemovefromWatchlist}) => {
  const[Search, setSearch]=useState('')
  const[genresList ,SetgenresList]= useState(['All Genres'])
  const[CurrGenre,SetCurrgenre]=useState('All Genres')

   let handlesearch=(e)=>{
setSearch(e.target.value)
   }
   let handlegenre=(genre)=>{
      SetCurrgenre(genre)
   }
 
   let Increase_order=()=>{
        let sortedIncreseing=  WatchList.sort((movieA,movieB)=>{
            return movieA.vote_average-movieB.vote_average
          })
          setWatchList([...sortedIncreseing])
   }
   let Decrease_order=()=>{
        let sortedDecresing=  WatchList.sort((movieA,movieB)=>{
            return movieB.vote_average-movieA.vote_average
          })
          setWatchList([...sortedDecresing])
   }

   useEffect(()=>{
    let temp = WatchList.map((movieObj)=>{
      return geners[movieObj.genre_ids[0]]
    } ) 
    temp= new Set(temp)
     SetgenresList(['All Genres',...temp])
  console.log(temp)
   },[WatchList])

  return (
    <>
   <div className='flex justify-center m-4 flex-wrap'>
    {genresList.map((genre)=>{
      return <div  onClick={()=>handlegenre(genre)} className={ CurrGenre==genre?'flex  justify-center items-center h-[2.5rem] w-[9rem] bg-blue-400 text-white rounded-xl font-semibold p-4 mx-2':'flex  justify-center items-center h-[2.5rem] w-[9rem] bg-gray-400/50 text-white rounded-xl font-semibold p-4 mx-2'}>{genre}</div>
    })}
    
    
    </div>
    

    <div className='flex justify-center my-4'>
      <input  onChange={handlesearch} type="text" placeholder='Search Movies'  className='bg-gray-200 h-[2.5rem] w-[18rem] p-4 outline-none'/>
    </div>
    <div className='border overflow-hidden rounded-lg border-gray-300 m-8'>
      <table className=' w-full text-black text-center'>
        <thead className='border-b-2'>
       <tr>
        <th className='text-white'>Name</th>
        <th className='flex justify-center'>
          <div className='p-2 ' onClick={Increase_order}><i className="fa-solid text-white fa-arrow-up"></i></div>
          <div className='p-2 text-white'>Ratings</div>
          <div className='p-2 'onClick={Decrease_order}><i className="fa-solid text-white fa-arrow-down"></i></div>
        </th>
        <th className='text-white'>Popularity</th>
        <th className='text-white'>Genre</th>
       </tr>
        </thead>

        <tbody>
          {WatchList.filter((obj)=>{
            if(CurrGenre=='All Genres')
              return true
            else{
              return geners[obj.genre_ids[0]]==CurrGenre;
            }
          }).filter((movieobj)=>{
            return movieobj.title.toLowerCase().includes(Search.toLocaleLowerCase())
          }).map((item)=>{
            return(  <>
            <tr  key={item.id}className='border border-gray-100'>

            <td className='flex items-center px-6 py-4'>
              <img  className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}           alt="" />
              <div className='mx-10 text-white'>{item.title}</div>
            </td>
            <td className='text-white'>{item.vote_average}</td>
            <td className='text-white'>{item.popularity}</td>
            <td className='text-white'>{geners[item.genre_ids[0]]}</td>
            <td onClick={()=>{RemovefromWatchlist(item)}} className='text-red-700 font-bold'>Delete</td>
  </tr>
  </>)

          })}
        

        </tbody>

      </table>
    </div>

    
    </>
  )
}

export default Watchlist