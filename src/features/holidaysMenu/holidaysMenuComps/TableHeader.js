import React from 'react'
import { TableHead, TableRow, TableCell, makeStyles} from '@material-ui/core'
import HolidaysMenuStyle from '../HolidaysMenuStyle'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(HolidaysMenuStyle)

function TableHeader() {
  const {t}=useTranslation()

  const classes = useStyles()
  return (
    <TableHead className={classes.Header}>
      <TableRow className={classes.HeaderRow}>
        <TableCell className={classes.Cell}>{t('Header.DataIncepere')}</TableCell>
      
        <TableCell className={classes.Cell}>{t('Header.DataSfarsit')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.Tip')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.Inlocuitor')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.Comentarii')}</TableCell>
        <TableCell className={classes.Cell}>{t('Header.StareConcediu')}</TableCell>
      </TableRow>
   
    </TableHead>
  )
}



export default TableHeader
