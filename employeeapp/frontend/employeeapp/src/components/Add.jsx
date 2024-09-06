import { TextField,Button} from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div><h2>Add</h2>
    <TextField label="NAME" variant="filled" ></TextField><br /><br />
    <TextField label="AGE" variant="filled" ></TextField><br /><br /><br />
    <TextField label="DEPARTMENT" variant="filled" ></TextField><br /><br /><br />
    <TextField label="SALARY" variant="filled" ></TextField>
    <Button variant = 'contained'>SUBMIT</Button>
    </div>
  )
}

export default Add