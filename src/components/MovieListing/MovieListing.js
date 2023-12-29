import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import { getAllShows,getAllEpisode} from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.css'

const MovieListing = () => {
    const movies=useSelector(getAllMovies);
    console.log("movies",movies);
    let renderMovies="";
    renderMovies=movies.Response==="True"?
    (movies.Search.map((movie,index)=>(<MovieCard key={index} data={movie}/>)))
    :(<div className="movie-error"><h3>{movies.Error}</h3></div>)

    const shows=useSelector(getAllShows);
    console.log("shows",shows)
    let renderShows="";
    renderShows=shows.Response==="True"?
    (shows.Search.map((show,index)=>(<MovieCard key={index} data={show}/>))):
    (<div className="show-error"><h3>{shows.Error}</h3></div>)

    const episode=useSelector(getAllEpisode);
    console.log("episode=",episode);
    let renderEpisode="";
    // renderEpisode=episode.Response==="True"?
    // (episode.Search.map((episode,index)=>(<MovieCard key={index} data={episode}/>))):
    // (<div className="episode-error"><h3>{episode.Error}</h3></div>)
    return (
        <div className='movie-wrapper'>
           <div className='movie-list'>
            <h2>Movies</h2>
            <div className="movie-container">
                {renderMovies}
            </div>
           </div>
           <div className='show-list'>
            <h2>Shows</h2>
            <div className="movie-container">
                {renderShows}
            </div>
           </div>
           <div className='show-list'>
            <h2>Episodes</h2>
            <div className="movie-container">
                {renderEpisode}
            </div>
           </div>

        </div>
    );
};

export default MovieListing;