import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector  } from 'react-redux'

import useStyles from './styles'
import { createPost, updatePost } from '../../actions/posts'

//Get The current id on the post that we are on

const Form = ( { currentId, setCurrentId }) => {
    console.log('current id ', setCurrentId)
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    // if we have a currentid then we want to loop over state.post and make a find method on it that has the same id as our current id then if not then it will = to null
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const classes = useStyles();
    const dispatch = useDispatch()

    
    useEffect(() => {
        //if post exis then we are going to set post data
        if(post) setPostData(post)
        //dependency array and say when this should be ran
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId, postData))
        } else {
        dispatch(createPost(postData))
    }
}

    const clear = () => {

    }

    return (

        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>

                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator}
                    //spread post data for in every text field and we do the same thing and only change the last property that means all data will persist but change the specific text field
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />

                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}
                    //spread post data for in every text field and we do the same thing and only change the last property that means all data will persist but change the specific text field
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />

                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}
                    //spread post data for in every text field and we do the same thing and only change the last property that means all data will persist but change the specific text field
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />

                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}
                    //spread post data for in every text field and we do the same thing and only change the last property that means all data will persist but change the specific text field
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form