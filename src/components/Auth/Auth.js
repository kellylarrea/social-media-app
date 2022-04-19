import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'

const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)

    const isSignup = false

    const handleShowPassword = () => {
      
    }

    const handleSubmit = () => {

    }

    const handleChange = () =>{

    }

  return (
   <Container component="main" maxWidth="xs">
<Paper className={classes.paper} elevation={3}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon/>
       </Avatar>
       <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign in'}</Typography>
       <form className={classes.Form} onSubmit={handleSubmit}>
         <Grid container spacing={2}>
           {
             isSignup && (
               <>
               <Input name="firstName" label="FirstName" handleChange={handleChange} autoFocus half/>
               <Input name="lasttName" label="LasttName" handleChange={handleChange}  half/>
               </>
             )}
             <Input name="email" label=" Email Address" handleChange={handleChange} type="email"/>
             <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
         </Grid>
       </form>
       </Paper>
     </Container>
  )
}

export default Auth
