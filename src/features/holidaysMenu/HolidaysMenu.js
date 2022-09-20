import React, { Fragment,useState } from 'react'
import { Typography, Grid,TableFooter, TableCell, Table,TableRow,TableBody,TableHead,TableContainer} from '@material-ui/core'
import { styled } from '@material-ui/styles'
import {makeStyles} from '@material-ui/core'
import TablePagination from '@material-ui/core/TablePagination'

import HolidaysMenuStyle from './HolidaysMenuStyle.js'


const useStyles= makeStyles(HolidaysMenuStyle)
function crd(Id,DataInceput,DataSfarsit,TipConcediu,Inlocuitor,Comentarii,StareConcedii){
  return{Id,DataInceput,DataSfarsit,TipConcediu,Inlocuitor,Comentarii,StareConcedii}; 
}

function HolidaysMenu() {

  const [page,setPage]=useState(1)
  
    const handleBackButtonClick = (event,page) => {
      console.log('backPage')
      TablePagination.onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event,page) => {
      console.log('nextPage')
      TablePagination.onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      console.log('lastPage')
      TablePagination.onPageChange(event, Math.max(0, Math.ceil(5 / 1) - 1));
    }
    
  const classes=useStyles()
  function BackButtons(){
    return(
     <Fragment> <div onClick={console.log('FristPage'),() => {setPage(1)}}className={classes.BtnPrev}><div className={classes.FBar}></div><div className={classes.BtnPrevCover}></div></div>
      <div className={classes.BtnPrev}><div onClick={() => {setPage(page+1)}} className={classes.BtnPrevCover}></div></div>
      </Fragment>
    )
  }
  function FrontButtons(){
    return(
      <Fragment>
      <div className={classes.BtnNext}><div onClick={() => {setPage(page-1)}}className={classes.BtnPrevCover}></div></div>
            <div className={classes.BtnNext}><div onClick={() => {setPage(5)}} className={classes.LBar}></div><div className={classes.BtnPrevCover}></div></div></Fragment>
    )
  }
  const rows=[
    crd(1,'20/10/2020','21/10/2020','Odihna','Miguel Gustavo','Concediu de odihna','Respins'),
    crd(2,'24/09/2021','02/10/2021','Medical','Matei Mirel','Ma simt rau ','Aprobat'),
    crd(3,'20/10/2020','21/10/2020','Odihna','Matei Mirel','Ma odihnesc','In asteptare'),
    crd(4,'20/10/2020','21/10/2020','Medical','Matei Mirel','Sunt gripat','In asteptare'),
    crd(5,'20/10/2020','21/10/2020','Medical','Popescu Ion','Mi-am rupt piciorul','In asteptare')

  ];

  return (

   <TableContainer className={classes.Table} >
      <Table > 
       <TableHead className={classes.Header} >
        <TableRow className={classes.HeaderRow} >    
         <TableCell className={classes.Cell}>Data Inceput</TableCell>
         <TableCell className={classes.Cell} >Data Sfarsit</TableCell>
         <TableCell className={classes.Cell} >Tip Concediu</TableCell>
         <TableCell className={classes.Cell} >Inlocuitor</TableCell>
         <TableCell className={classes.Cell} >Comentarii</TableCell>
         <TableCell className={classes.Cell} >Stare Concedii</TableCell>
        </TableRow>  
      </TableHead>
   
      <TableBody>
        {rows.slice( page*1 , (page+1)*1).map((row)=>(
         
         <TableRow className={classes.Rows} key={row.Id} >
         <TableCell className={classes.Cell} >{row.DataInceput}</TableCell>
          <TableCell className={classes.Cell} >{row.DataSfarsit}</TableCell>
          <TableCell className={classes.Cell} >{row.TipConcediu}</TableCell>
          <TableCell className={classes.Cell} >{row.Inlocuitor}</TableCell>
          <TableCell className={classes.Cell}  >{row.Comentarii}</TableCell>
          <TableCell className={classes.Cell} >{row.StareConcedii}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className={classes.Header}>
        <TableRow className={classes.TableRow}>
          
          <TableCell className={classes.Cell,classes}>  
          </TableCell>
          <TableCell className={classes.Cell}></TableCell>
          <TableCell className={classes.Cell}></TableCell>
          <TableCell className={classes.Cell}></TableCell>
          <TableCell className={classes.Cell}></TableCell>
          <TableCell className={classes.Cell,classes.CF}>
              <BackButtons/>
              <FrontButtons/>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>
  )
}

export default HolidaysMenu