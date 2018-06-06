import {connect} from 'react-redux';
import Home from '../tabComponents/home'
import { fetchNews } from '../actions';

const mapStateToProps = (state) =>{
    return {
        news: state.NewsReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onFetchNews: () =>{
            dispatch(fetchNews())
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default NewsContainer;