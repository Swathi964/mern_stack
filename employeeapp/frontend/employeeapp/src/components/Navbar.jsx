import React from 'react'
import { AppBar, Button, Toolbar,Typography} from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       

        <AppBar >
            <Toolbar>
                <Typography variant="h6" component='div'color="black">employeeapp</Typography> &nbsp;
                <Link to='/a'>
                       <Button variant='contained' color='secondary'> Add</Button></Link>
                <Link to='/'>
                       <Button variant='contained' color='secondary'> View</Button></Link>
    
            </Toolbar>
        </AppBar>
    
    </div>
  )
}

export default Navbar