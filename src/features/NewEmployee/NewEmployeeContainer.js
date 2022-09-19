import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import NewEmployeeCard from './NewEmployeeCard'
import appStyle from './NewEmployeeStyle';
import { makeStyles } from '@material-ui/core'


function NewEmployeeContainer() {
  return (
   
    <NewEmployeeCard></NewEmployeeCard>
        
)
}

export default NewEmployeeContainer