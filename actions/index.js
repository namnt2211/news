import { FETCH_NEWS, FETCH_SUCCESS, FETCH_FAILED } from "../constants/constants";

 export const fetchNews = (sort) =>{
     return {
         type: FETCH_NEWS,
         sort
     }
 }

 export const fetchSuccess = (receiveNews) =>{
     console.log('====================================');
     console.log('a');
     console.log('====================================');
     return {
         type: FETCH_SUCCESS,
         receiveNews
     }
 }

 export const fetchFailed = (error) =>{
     return{
         type: FETCH_FAILED,
         error
     }
 }