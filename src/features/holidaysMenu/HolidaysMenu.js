import React, { Fragment } from 'react'
import { Typography, Grid, TableCell, Table,TableRow,TableBody,TableHead,TableContainer} from '@material-ui/core'
import { styled } from '@material-ui/styles'
import {makeStyles} from '@material-ui/core'


import HolidaysMenuStyle from './HolidaysMenuStyle.js'

const useStyles= makeStyles(HolidaysMenuStyle)
function crd(Id,DataInceput,DataSfarsit,TipConcediu,Inlocuitor,Comentarii,StareConcedii){
  return{Id,DataInceput,DataSfarsit,TipConcediu,Inlocuitor,Comentarii,StareConcedii}; 
}

function HolidaysMenu() {
  
  const classes=useStyles()
  const rows=[
    crd(1,'20/10/2020','21/10/2020','Odihna','Miguel Gustavo','Concediu de odihna','Respins'),
    crd(2,'24/09/2021','02/10/2021','Medical','Matei Mirel','Ma simt rau ','Aprobat'),
    crd(3,'20/10/2020','21/10/2020','Odihna','Matei Mirel','Ma odihnesc','In asteptare'),
    crd(4,'20/10/2020','21/10/2020','Medical','Matei Mirel','Sunt gripat','In asteptare'),
    crd(5,'20/10/2020','21/10/2020','Medical','Popescu Ion','Mi-am rupt piciorul','In asteptare')

  ];

  return (

   <TableContainer className={classes.Table}>
      <Table > 
      <TableHead className={classes.Header} >
      <tr className={classes.HeaderRow}>    
       <td className={classes.Cell}>Data Inceput</td >
       <td className={classes.Cell}>Data Sfarsit</td >
       <td className={classes.Cell}>Tip Concediu</td >
       <td className={classes.Cell}>Inlocuitor</td >
       <td className={classes.Cell}>Comentarii</td >
       <td className={classes.Cell}>Stare Concedii</td >
       </tr>  
      </TableHead>
    
      <TableBody>
        {rows.map((row)=>(
         
         <tr key={row.Id} className={classes.Rows}>
         <td className={classes.Cell}>{row.DataInceput}</td >
          <td className={classes.Cell}>{row.DataSfarsit}</td >
          <td className={classes.Cell}>{row.TipConcediu}</td >
          <td className={classes.Cell}>{row.Inlocuitor}</td >
          <td className={classes.Cell} >{row.Comentarii}</td >
          <td className={classes.Cell}>{row.StareConcedii}</td   >
          </tr>
        ))}
    </TableBody>
    
      </Table>
  
      </TableContainer>
  )
}

export default HolidaysMenu