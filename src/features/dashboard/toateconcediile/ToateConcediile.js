import React, { Fragment } from 'react'
import { Typography, Grid, Container, Table, TableCell } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import "./ToateConcediile.css"
import {makeStyles} from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle.js'
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles= makeStyles(ToateConcediileStyle)
function ToateConcediile(){
    const totateConcediile =[{id:1, name:"Popescu",surname:"Alex",date:'29/02/2022',date2:'31/03/2022',inlocuitor:"Popescu Ionut",stare:"Aprobat"},
                            {id:2, name:"Gogu",surname:"Alex",date:'27/02/2022',date2:'30/03/2022',inlocuitor:"Popescu Ionut",stare:"Aprobat"},
                            {id:3, name:"Gustavo",surname:"Alex",date:'26/02/2022',date2:'19/03/2022',inlocuitor:"Popescu Ionut",stare:"Aprobat"},
                            {id:4, name:"Miguel",surname:"Alex",date:'25/02/2022',date2:'28/03/2022',inlocuitor:"Popescu Ionut",stare:"Aprobat"}]
    const classes = useStyles()
    const addToast = useToast()
    addToast('Welcome', 'success')
    return (
        <TableContainer className={classes.Tabel} >
         <Table >
          <TableHead className={classes.Parinte}>
            <TableRow>
              <TableCell>Nume</TableCell>
              <TableCell>Prenume</TableCell>
              <TableCell>Data incepere</TableCell>
              <TableCell>Data sfarsit</TableCell>
              <TableCell>Inlocuitor</TableCell>
              <TableCell>Stare cerere</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {totateConcediile.map((row) => (
              <TableRow className={classes.Rows} key={row.id}>
                <TableCell className={classes.Cell}>{row.name}</TableCell>
                <TableCell className={classes.Cell}>{row.surname}</TableCell>
                <TableCell className={classes.Cell}>{row.date}</TableCell>
                <TableCell className={classes.Cell}>{row.date2}</TableCell>
                <TableCell className={classes.Cell}>{row.inlocuitor}</TableCell>
                <TableCell className={classes.Cell}>{row.stare}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
      </TableContainer>
    )
}

export default ToateConcediile;