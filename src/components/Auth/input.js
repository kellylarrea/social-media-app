import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'

const input = ( { name, half }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name={name}
            onCHange={handleChange}
            variant="outlined"
            required
            fullWidth
            labele={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' ? {
                endAdornment : (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                          {type === "password" ? <Visibility /> : <VisibilityOff />}  
                        </IconButton>
                    </InputAdornment>
                )
                
            }}

        />
    </Grid>
  )
}

export default input