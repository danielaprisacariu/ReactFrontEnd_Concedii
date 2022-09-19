import React, { Fragment} from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  
function DatePickers() {
    const classes = useStyles();
  
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }

function CerereConcediu() {
    const addToast = useToast()
    addToast('Welcome', 'success')
    return (
      <Fragment>
        <Typography>Trebuie sa mearga..</Typography>
            <DatePickers> </DatePickers>
        <Grid>Oare merge?</Grid>
      </Fragment>
    )
  }
  
export default CerereConcediu
