import { Button, Icon, IconButton, Input, SvgIcon, TextField } from '@material-ui/core'
import React, {useState} from 'react'
import appStyle from './EmployeeStyle';
import { makeStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import EmployeesPageContainer from './EmployeesPageContainer';

const useStyles = makeStyles(appStyle)

function EmployeeFilter(){
    const classes = useStyles();
    const [searchWord, setSearch] = useState('');
    const handleChange = event => {
        setSearch(event.target.value);
    }
    return(
        <>
            <div className={classes.filterStyles}>
                <TextField className={classes.searchField} placeholder='Cuta' value={searchWord} id='searchWord' type="text" onChange={handleChange}></TextField>
                <SearchIcon className={classes.btnClass} onClick={()=>{}}></SearchIcon>
            </div>
        </>
    )
}

export default EmployeeFilter