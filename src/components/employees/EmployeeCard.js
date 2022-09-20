import { Card, CardContent, FormLabel, Grid} from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import appStyle from './EmployeeStyle';
import { makeStyles } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'

import { CardHeader, IconButton, CardMedia, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles(appStyle)

function EmployeeCard({employee}){
    const classes = useStyles();
    return(
        <>
        <Card variant="outlined" className={classes.employeeCard} sm={4}>
            <CardHeader className={classes.employeeCardHeader}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                }
            />
            <CardMedia className={classes.imageStyle}
                component="img"
                image={employee.Poza}
                alt="imagine"
            />
            <CardContent>
                <Typography className={classes.employeeContentName}>{employee.Nume + " " +  employee.Prenume}</Typography>
                <Typography className={classes.employeeContentFunction}>{employee.Functie}</Typography>
                <Typography className={classes.employeeContentDepartament}>{employee.Departament}</Typography>
                <IconCard icon={PhoneIcon} content={employee.NrTelefon} iconColor="purple" customCardClass={classes.iconCardMyStyle}/>
                <IconCard icon={MailIcon} content={employee.Email} iconColor="purple" customCardClass={classes.iconCardMyStyle}/>
            </CardContent>  
        </Card>
        </>
    )
}

EmployeeCard.propTypes = {
    employee: PropTypes.object.isRequired,
  }

export default EmployeeCard