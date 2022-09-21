import React from 'react'
import { CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import appStyle from './EmployeeStyle'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import PropTypes from 'prop-types'

const useStyles = makeStyles(appStyle)

function EmployeeCardContent({ employee }) {
  const classes = useStyles()
  return (
    <>
      <CardHeader
        className={classes.employeeCardHeader}
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        }
      />
      <CardMedia className={classes.imageStyle} component='img' image={employee.Poza} alt='imagine' />
      <CardContent>
        <Typography className={classes.employeeContentName}>{employee.Nume + ' ' + employee.Prenume}</Typography>
        <Typography className={classes.employeeContentFunction}>{employee.Functie}</Typography>
        <Typography className={classes.employeeContentDepartament}>{employee.Departament}</Typography>
        <Grid container className={classes.iconCardMyStyle}>
          <Grid item xs={2}>
            <PhoneIcon></PhoneIcon>
          </Grid>
          <Grid item xs={2}>
            <Typography>{employee.NrTelefon}</Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.iconCardMyStyle}>
          <Grid item xs={2}>
            <MailIcon></MailIcon>
          </Grid>
          <Grid item xs={2}>
            <Typography>{employee.Email}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </>
  )
}

EmployeeCardContent.propTypes = {
  employee: PropTypes.object.isRequired
}

export default EmployeeCardContent
