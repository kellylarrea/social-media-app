import * as api from '../api' //we import everything from the actions as api

// Action Creators - functions that return actions and that action is just a type and a table
//a function that returns another function
export const getPosts = () => async (dispatch) => { 
    try {
        //fetch data from api 
        const { data } =  await api.fetchPosts()
        //pass data to payload as action.payload
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}