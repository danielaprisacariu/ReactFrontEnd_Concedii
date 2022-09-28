import React, { useReducer } from 'react'
import { Container,Button } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { ComboBoxComponenta } from './ComboBoxComponenta'
import { AAReducer, initialState } from './AAReducer'
import { makeStyles } from '@material-ui/styles'
import AdministrareAngajatiStyle from '../AdministrareAngajatiStyle'
const useStyles = makeStyles(AdministrareAngajatiStyle)
export function StergereEchipaComp({onClick,onChange,state}) {
  const classes = useStyles()

  return (
    <Container className={classes.Card,classes.Short}>
      <div>Desfiintare Echipa</div>
      <div>
        Manager:
        <ComboBoxComponenta onChange={onChange} propertyName='managerSE' arrayDataSource={state.manageri} />
      </div>
      <Button onClick={onClick}>Desfiinteaza</Button>
    </Container>
  )
}
StergereEchipaComp.propTypes={
    onChange: PropTypes.func,
    state: PropTypes.object,
    onClick: PropTypes.func
}