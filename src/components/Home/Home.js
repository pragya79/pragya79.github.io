import React, { useEffect } from 'react';
import './Home.css';
// import movieApi from '../../apis/movieApi';
// import {APIKey} from '../../apis/movieApiKey';
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux';
import { addMovies, fetchAsyncEpisode } from '../../features/movies/movieSlice';
import { fetchAsyncMovies,fetchAsyncShows } from '../../features/movies/movieSlice';
const Home = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
        dispatch(fetchAsyncEpisode());
    },[])
    return (
       <div>
         <div className="banner-img"></div> 
           <MovieListing/>
       </div>
    );
};

export default Home;