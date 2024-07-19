import React from "react";

const Moviecard = ({
  movieData,
  poster_path,
  WatchList,
  title,
  RemovefromWatchlist,
  AddtoWatchlist,
}) => {
  let movieCointain = (movieData) => {
    for (let i = 0; i < WatchList.length; i++) {
      if (WatchList[i].id == movieData.id) {
        return true;
      }
    }
    return false;
  };
  return (
    <div
      className="h-[30vh] rounded-xl bg-center bg-cover w-[150px] hover:scale-110 duration-300 m-1 hover:cursor-pointer flex flex-col justify-between "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w185${poster_path})`,
      }}
    >
      {movieCointain(movieData) ? (
        <div onClick={(()=>{
          RemovefromWatchlist(movieData)
        })} className="flex justify-center items-center h-8 w-8 m-2 bg-gray-900/60 rounded-xl"
        title="Remove from Watchlist"
        > &#10060; </div>
      ) : (
        <div
          className="  flex justify-center items-center h-8 w-8 m-2 bg-gray-900/60 rounded-xl"
          onClick={() => AddtoWatchlist(movieData)}
          title="Add to Watchlist"
        >
          {" "}
          &#10084;
        </div>
      )}

      <div className="text-center pb-2 text-white w-full rounded-xl bg-gray-900/60 ">
        {title}
      </div>
    </div>
  );
};

export default Moviecard;
