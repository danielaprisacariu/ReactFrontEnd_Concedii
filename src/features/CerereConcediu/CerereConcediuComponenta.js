import React, { Fragment, useReducer } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { DatePickersCustomComponent } from './DatePickersCustomComponent'
import { ComboBoxComponenta } from './ComboBoxComponenta'
import { makeStyles } from '@material-ui/core'
import Styles from './Styles.js'
import { ComentariiTextField } from './ComentariiTextField'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import SaveIcon from '@material-ui/icons/Save'
import { useHistory } from 'react-router'

import PropTypes from 'prop-types'
import CerereConcediuReducer from './CerereConcediuReducer'
import Moment from 'moment'

const useStyles = makeStyles(Styles)

function CerereConcediuComponenta(props) {
  const { tipuriConcedii } = props
  const { inlocuitori } = props

  const initialState = {
    id: null,
    tipConcediuId: null,
    dataInceput: Moment().format('YYYY-MM-DD'),
    dataSfarsit: null,
    inlocuitorId: null,
    comentarii: null,
    stareConcediuId: 1,
    angajatId: null,
    zileConcediu: null
  }

  const [state, dispatch] = useReducer(CerereConcediuReducer, initialState)

  const onPropertyChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
    console.log(state)
  }

  const history = useHistory()
  const handleClick = () => {
    history.push({ pathname: `/toateconcediile` })
  }
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 className={classes.h1}> Adauga concediu </h1>
      </Grid>

      <div className={classes.DA}>
        <Grid item md={6} xs={12}>
          <div className={classes.span}> DATA INCEPUT </div>
          <DatePickersCustomComponent
            className={classes.data}
            onChange={onPropertyChange}
            propertyName='dataInceput'
            data={state.dataInceput}
          ></DatePickersCustomComponent>
        </Grid>

        <Grid item md={6} xs={12}>
          <div className={classes.span}> DATA SFARSIT</div>
          <DatePickersCustomComponent
            className={classes.data}
            onChange={onPropertyChange}
            propertyName='dataSfarsit'
            data={state.dataSfarsit}
          ></DatePickersCustomComponent>
        </Grid>

        <Grid item md={6} xs={12}>
          <div className={classes.span1}> TOTAL ZILE LIBERE SOLICITATE </div>
          <div className={classes.box}></div>
          <div className={classes.span2}> 6 zile </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.span1}>ZILE LIBERE DISPONIBILE</div>
          <div className={classes.box}></div>
          <div className={classes.span2}>17 zile </div>
        </Grid>

        <Grid item md={6} xs={12}>
          <div className={classes.span3}>TIP CONCEDIU</div>
          <ComboBoxComponenta
            arrayDataSource={tipuriConcedii}
            onChange={onPropertyChange}
            propertyName='tipConcediuId'
            id={state.TipConcediuId}
          ></ComboBoxComponenta>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.span3}>INLOCUITOR</div>
          <ComboBoxComponenta
            arrayDataSource={inlocuitori}
            onChange={onPropertyChange}
            propertyName='inlocuitorId'
            id={state.InlocuitorId}
          ></ComboBoxComponenta>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.span1}> COMENTARII</div>
        </Grid>

        <Grid item xs={12}>
          <ComentariiTextField onChange={onPropertyChange} propertyName='comentarii'></ComentariiTextField>
        </Grid>

        <Grid item xs={12}>
          <Button className={classes.butonSalveaza} onClick={handleClick}>
            <SaveIcon> </SaveIcon>
            SALVEAZA
          </Button>
        </Grid>
      </div>
    </Grid>
  )
}

CerereConcediuComponenta.propTypes = { tipuriConcedii: PropTypes.array.isRequired, inlocuitori: PropTypes.array.isRequired }

export default CerereConcediuComponenta
