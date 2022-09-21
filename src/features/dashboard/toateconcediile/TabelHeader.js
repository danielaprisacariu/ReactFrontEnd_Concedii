import React, { Fragment,useState } from 'react';
import {TableCell } from '@material-ui/core';
import "./ToateConcediile.css"
import {makeStyles} from '@material-ui/core';
import ToateConcediileStyle from './ToateConcediileStyle';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const useStyles= makeStyles(ToateConcediileStyle)

function HeaderTabel(){
    const classes = useStyles()
    return(
        <TableHead className={classes.Parinte}>
            <TableRow className={classes.Rows}>
              <TableCell className={classes.Cell}>Nume</TableCell>
              <TableCell className={classes.Cell}>Prenume</TableCell>
              <TableCell className={classes.Cell}>Data incepere</TableCell>
              <TableCell className={classes.Cell}>Data sfarsit</TableCell>
              <TableCell className={classes.Cell}>Inlocuitor</TableCell>
              <TableCell className={classes.Cell}>Stare cerere</TableCell>
            </TableRow>
          </TableHead>
    )
}

export default HeaderTabel;