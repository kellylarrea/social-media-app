import { appendFileSync } from 'fs';
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

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) =>{
    try {
        //returning the updated memory or post
        const { data } = await api.updatePost(id, post)
        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        //we do not need the response becauase we are not interested in the response. So no need to add const response or data and as payload just pass the id
        await api.deletePost(id)
        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}