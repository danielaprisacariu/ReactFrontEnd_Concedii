import { TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function LogoutContainer() {
  const history = useHistory()

  useEffect(() => {
    localStorage.removeItem('token')

    history.push('/')
    location.reload()
  }, [history])

  return <div>You will be logged out</div>
}
