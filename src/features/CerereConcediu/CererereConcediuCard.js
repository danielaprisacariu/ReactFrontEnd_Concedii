import React, { Fragment } from 'react'
import CerereConcediuComponenta from './CerereConcediuComponenta'
import PropTypes from 'prop-types'

export default function CererereConcediuCard(props) {
  const { tipuriConcedii } = props

  return (
    <>
      <CerereConcediuComponenta tipuriConcedii={tipuriConcedii}></CerereConcediuComponenta>
    </>
  )
}
CererereConcediuCard.propTypes = { tipuriConcedii: PropTypes.array.isRequired }
