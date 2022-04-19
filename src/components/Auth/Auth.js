import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'

const Auth = () => {
    const classes = useStyles()

    const isSignup = false

    const handleChange = () =>{

    }

  return (
   <Container component="main" maxWidth="xs">
<Paper className={classes.paper} elevation={3}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon/>
       </Avatar>
       <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign in'}</Typography>
       <Form className={classes.Form} onSubmit={handleSubmit}>
         <Grid container spacing={2}>
           {
             isSignup && (
               <>
               <Grid xs={6} md={12}>
               <TextField name="firstName" label="FirstName" handleChange={handleChange} autoFocus xs={6}/>
               </Grid>
               <Grid xs={6} md={12}>
               <TextField name="lasttName" label="LasttName" handleChange={handleChange} autoFocus xs={6}/>
               </Grid>
               </>
             )
           }
         </Grid>
       </Form>
       </Paper>
     </Container>
  )
}

export default Auth
