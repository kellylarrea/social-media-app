import React from "react";
//retrieve data from global redux store
import { useSelector } from "react-redux";
import { Grid, CircularProgress} from '@material-ui/core'

import Post from './Post/Post'
import useStyles from './styles'

const Posts = ({ setCurrentId }) => {
    // initialize as a hook and return state.posts where we export combine reducers-post.js
    const posts = useSelector((state)=> state.posts)
    const classes = useStyles()

    console.log(posts)

    return(
        //if no posts.length then show circularProgess else grid of posts
       !posts.length ? <CircularProgress /> : (
           <Grid className={classes.container} container alignItems="stretch" spacing={3}>
               { 
               //loop over post and return
                   posts.map((post)=>(
                       //key = post._id and item xs for how large for mobile devices
                       //as props we will be sending post to each post component
                       <Grid key={post._id} item xs={12} sm={6}>
                           <Post post={post} setCurrentId={setCurrentId}/>
                       </Grid>
                   ))
               }
           </Grid>
       )
    )
}

export default Posts