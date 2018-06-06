import { FETCH_NEWS, FETCH_SUCCESS, FETCH_FAILED } from "../constants/constants";

const NewsReducer = (news = [], action) =>{
    switch(action.type) {

        case FETCH_SUCCESS:
            return action.receiveNews;
        case FETCH_FAILED:
            return [];
        default:
            return news;
    }
}

export default NewsReducer;