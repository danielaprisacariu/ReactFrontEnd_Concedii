import React, { Fragment } from 'react'
import CerereConcediuComponenta from './CerereConcediuComponenta'
import PropTypes from 'prop-types'

export default function CererereConcediuCard(props) {
  const { tipuriConcedii } = props
  const { inlocuitori } = props

  return (
    <>
      <CerereConcediuComponenta tipuriConcedii={tipuriConcedii} inlocuitori={inlocuitori}></CerereConcediuComponenta>
    </>
  )
}
CererereConcediuCard.propTypes = { tipuriConcedii: PropTypes.array.isRequired, inlocuitori: PropTypes.array.isRequired }
