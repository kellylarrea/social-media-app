import React from 'react'
import { AppBar, Toolbar, Typography, Button, Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyle from './styles'
import memories from '../../images/memories.png'

export default function Navbar() {
    const classes = useStyle()
    const user = null

    return (
        
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.brandContainer}>
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img src={memories} className={classes.image} alt="memories" height="60" />
                </div>
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="containers" className={classes.logout} color="secondary">Logout</Button>
                        </div>
                    ) : (
<Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
                </Toolbar>
            </AppBar>
       

    )
}
