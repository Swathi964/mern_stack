import { Button, Table, TableCell, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'

import React, { useEffect, useState } from 'react'
import axios from 'axios';
const View = () => {
  var [emp, setEmp] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/view")
      .then((res) => {
        console.log(res.data);
        setEmp(res.data);
      })
      .catch((err) => console.log(err));
  }
  )


  const delValue = (id) => {
    axios.delete("http://localhost:3004/remove/" + id)
      .then((res) => {
        alert(res.data.meassage);
      })

  }
  return (
    <div>
      <h1>VIEW</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name&nbsp;</TableCell>
              <TableCell>Age&nbsp;</TableCell>
              <TableCell>Department&nbsp;</TableCell>
              <TableCell>Salary&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emp.map((val) => {
              return (

                <TableRow>
                  <TableCell>{val.Name}</TableCell>
                  <TableCell>{val.Age}</TableCell>
                  <TableCell>{val.Dept}</TableCell>
                  <TableCell>{val.Sal}</TableCell>
                  <TableCell>
                    <Button size="small" variant='contained'>update</Button>&nbsp;
                    <Button size="small" variant='contained' onClick={() => {
                      delValue(val_id)
                    }}>delete</Button>

                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default View