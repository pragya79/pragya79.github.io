import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from '../../apis/movieApi';
import {APIKey} from '../../apis/movieApiKey';


export const fetchAsyncMovies=createAsyncThunk(`movies/fetchAsyncMovies`,async()=>{
   
    const movieText="Harry"

    const response=await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`).catch((err)=>{
        console.log("Error:", err);
    })
    console.log("response from API: ",response);
    return response.data;
});
export const fetchAsyncShows=createAsyncThunk(`movies/fetchAsyncShows`,async()=>{
    
    const seriesText="Friends"

    const response=await movieApi.get(`?apikey=${APIKey}&s=${seriesText}&type=series`).catch((err)=>{
        console.log("Error:", err);
    })
    console.log("response from API: ",response);
    return response.data;

});

export const fetchAsyncMovieOrShowDetail=createAsyncThunk(`movies/fetchAsyncMovieOrShowDetail`,async(id)=>{

    const response=await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`).catch((err)=>{
        console.log("Error:", err);
       
    })
    console.log("response from API: ",response);
    return response.data;
});

export const fetchAsyncEpisode=createAsyncThunk(`movies/fetchAsyncEpisode`,async()=>{
    
    // const episodeText=""

    // const response=await movieApi.get(`?apikey=${APIKey}&s=${episodeText}&type=episode`).catch((err)=>{
    //     console.log("Error:", err);
    // })
    // console.log("response from API: ",response);
    // return response.data;
});

const initialState={
    movies:{},
    show:{},
    episode:{},
    selectedMovieOrShow:{}
}
// const movieSlice=createSlice({
//     name:"movies",
//     initialState,
//     reducers:{
//         addMovies:(state,{payload})=>{
//             state.movies=payload;
//         }
//     },
//     //extraReducers having extra async actions
//     extraReducers:{
//         [fetchAsyncMovies.pending]:()=>{
//                 console.log("Pending");
//         },
//         [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
//             console.log("Fetched Successfully!!");
//             return {...state,movies:payload};
//     },
//     [fetchAsyncMovies.rejected]:()=>{
//         console.log("Rejected");
       
// }
//     }
// });


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieOrShow={}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, (state) => {
                console.log("Pending");
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                console.log("Fetched Successfully!!");
                return { ...state, movies: action.payload };
            })
            .addCase(fetchAsyncShows.fulfilled, (state, action) => {
                console.log("Fetched Successfully!!");
                return { ...state, shows: action.payload };
            })
            .addCase(fetchAsyncMovies.rejected, () => {
                console.log("Rejected");
            })
            .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
                console.log("Fetched Successfully!!");
                return { ...state, selectedMovieOrShow: action.payload };
            })
           
    }
});

export const {removeSelectedMovieOrShow}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getAllEpisode=(state)=>state.movies.episode;
export const getSelectedMovieOrShow=(state)=>state.movies.selectedMovieOrShow;
export default movieSlice.reducer;