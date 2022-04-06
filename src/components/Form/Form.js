import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'

import useStyles from './styles'

const Form = () => {
    const [postData, setPostData] = useState({    creator: '', title:'', message:'', tags: '', selectedFile:''})
    const classes = useStyles();

    const handleSubmit = () =>{

    }

    return(

    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        
        <TextField name="creator" variant="outlined" label="Creator" fullWidthvalue={postData.creator}
        //spread post data for in every text field and we do the same thing and only change the last property that means all data will persist but change the specific text field
        onChange={(e) => setPostData({ ... postData, creator: e.target.value})} />

        <TextField name="title" variant="outlined" label="Title" fullWidthvalue={postData.title}
            //spread post data for in every text field and we do the same thing and only change the last property that means all data will persist but change the specific text field
            onChange={(e) => setPostData({ ... postData, title: e.target.value})}
            />
    
        <TextField name="message" variant="outlined" label="Message" fullWidthvalue={postData.message}
            //spread post data for in every text field and we do the same thing and only change the last property that means all data will persist but change the specific text field
            onChange={(e) => setPostData({ ... postData, message: e.target.value})}
            />
    
        <TextField name="tags" variant="outlined" label="Tags" fullWidthvalue={postData.tag}
            //spread post data for in every text field and we do the same thing and only change the last property that means all data will persist but change the specific text field
            onChange={(e) => setPostData({ ... postData, tag: e.target.value})}
            />
    <div className={classes.fileInput}>
        <FileBase 
            type="file"
            multiple={false}
            onDone={(base64) => setPostData({ ...postData, selectedFile: base64})}
        />
    </div>
    <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
    <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Submit</Button>
        </form>
    </Paper>
    )
}

export default Form