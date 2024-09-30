import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <h1>Add New Products</h1>
        <TextField variant='outlined' label='Product Name' name='Product Name'/><br/><br/>
        <TextField variant='outlined' label='Price' name='Price'/><br /><br />
        <TextField variant='outlined' label='Category' name='Category'/><br/><br/>
        <TextField variant='outlined' label='Image' name='Image'/><br/><br/>
        <Button variant='contained' >Add</Button>
    </div>
  )
}
export default Add