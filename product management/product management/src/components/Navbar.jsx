import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{ backgroundColor: '#20B2AA' }}>
            <Toolbar>
              <Typography variant='h3' color='#D3D3D3'>V.shopi</Typography> 
                <Link to='/'>
                <Button variant='filled' color='#D3D3D3'>Home</Button>
                </Link>
                <Link to='/Add'>
                <Button variant='filled' color='#D3D3D3'>Add</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar