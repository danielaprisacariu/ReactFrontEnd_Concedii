import { Card, CardContent, FormLabel, Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import appStyle from './EmployeeStyle'
import { makeStyles } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import { CardHeader, IconButton, CardMedia, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import EmployeeCardContent from './EmployeeCardContent'

const useStyles = makeStyles(appStyle)

function EmployeesCard({ employees }) {
  const classes = useStyles()
  return (
    <Grid container spacing={5}>
      {employees?.angajati?.map(employee => (
        <Grid item xs={3} key={employee.id}>
          <IconCard
            icon={PermContactCalendarIcon}
            content={<EmployeeCardContent employee={employee}></EmployeeCardContent>}
            iconColor='purple'
            customCardClass={classes.employeeCard}
          ></IconCard>
        </Grid>
      ))}
    </Grid>
  )
}

EmployeesCard.propTypes = {
  employees: PropTypes.object
}

export default EmployeesCard
