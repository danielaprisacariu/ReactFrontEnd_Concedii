import React, { Fragment, useState } from 'react'
import { TableCell } from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import ToateConcediileStyle from './ToateConcediileStyle'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useTranslation } from 'react-i18next'
import Header from 'components/layout/Header'

const useStyles = makeStyles(ToateConcediileStyle)

function HeaderTabel() {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <TableHead className={classes.Parinte}>
      <TableRow className={classes.Rows}>
        {/* <TableCell className={classes.Cell}>{'Check'}</TableCell> */}
        <TableCell className={classes.Cell}>{t('Header.Nume')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.Prenume')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.Tip')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.DataIncepere')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.DataSfarsit')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.Inlocuitor')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.StareConcediu')}</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default HeaderTabel
