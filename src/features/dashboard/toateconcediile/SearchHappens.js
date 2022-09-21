import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'


const totateConcediileNefiltrat = [
    { id: 1, name: 'Popescu', surname: 'Alex', date: '29/02/2022', date2: '31/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 2, name: 'Gogu', surname: 'Alex', date: '27/02/2022', date2: '30/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 3, name: 'Gustavo', surname: 'Alex', date: '26/02/2022', date2: '19/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' },
    { id: 4, name: 'Miguel', surname: 'Alex', date: '25/02/2022', date2: '28/03/2022', inlocuitor: 'Popescu Ionut', stare: 'Aprobat' }
  ]

function Cautare(props) {

    const{input} = props

   
}

Cautare.propTypes={
input: PropTypes.object
}

export default Cautare