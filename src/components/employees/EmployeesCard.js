import { Card, CardContent, FormLabel, Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import appStyle from './EmployeeStyle'
import { makeStyles } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'

import { CardHeader, IconButton, CardMedia, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles(appStyle)

function EmployeesCard({ employees }) {
  const classes = useStyles()
  return (
    <Grid container spacing={5}>
      {employees.map(employee => (
        <Grid item xs={3} key={employee.Id}>
          {/* <Card variant='outlined' className={classes.employeeCard} sm={4}>
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
              <IconCard icon={PhoneIcon} content={employee.NrTelefon} iconColor='purple' customCardClass={classes.iconCardMyStyle} />
              <IconCard icon={MailIcon} content={employee.Email} iconColor='purple' customCardClass={classes.iconCardMyStyle} />
            </CardContent>
          </Card> */}
          <IconCard
            icon={MailIcon}
            // title={employee.Nume + ' ' + employee.Prenume}
            content={
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
                  <Grid item xs={2}>
                    <PhoneIcon></PhoneIcon>
                  </Grid>

                  <Typography>{employee.NrTelefon}</Typography>
                  {/* <IconCard icon={PhoneIcon} content={employee.NrTelefon} iconColor='purple' customCardClass={classes.iconCardMyStyle} /> */}
                  <MailIcon></MailIcon>
                  <Typography>{employee.Email}</Typography>
                  {/* <IconCard icon={MailIcon} content={employee.Email} iconColor='purple' customCardClass={classes.iconCardMyStyle} /> */}
                </CardContent>
              </>
            }
            iconColor='purple'
            customCardClass={classes.employeeCard}
          ></IconCard>
        </Grid>
      ))}
    </Grid>
  )
}

EmployeesCard.propTypes = {
  employees: PropTypes.object.isRequired
}

export default EmployeesCard
