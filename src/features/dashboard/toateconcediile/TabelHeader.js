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
            <TableRow>
              <TableCell>Nume</TableCell>
              <TableCell>Prenume</TableCell>
              <TableCell>Data incepere</TableCell>
              <TableCell>Data sfarsit</TableCell>
              <TableCell>Inlocuitor</TableCell>
              <TableCell>Stare cerere</TableCell>
            </TableRow>
          </TableHead>
    )
}

export default HeaderTabel;