import React from 'react'
import { Dashboard } from '@material-ui/icons'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const menuItems = [
  { icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
  { icon: <FormatListBulletedIcon />, text: 'Employees', path: '/employees', name: 'Employees' },
  { icon: <ExitToAppIcon />, text: 'NavBar.Delogare', path: '/login', name: 'Delogare' }
]

export default menuItems
