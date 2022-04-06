import React from "react";
//retrieve data from global redux store
import { useSelector } from "react-redux";

import Post from './Post/Post'
import useStyles from './styles'

const Posts = () => {
    // initialize as a hook and return state.posts where we export combine reducers-post.js
    const posts = useSelector((state)=> state.posts)

    const classes = useStyles()

    console.log(posts)

    return(
        <>
    <h1>Posts</h1>
    <Post />
    <Post />
    </>
    )
}

export default Posts