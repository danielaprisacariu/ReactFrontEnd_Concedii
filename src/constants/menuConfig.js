import React from 'react'
import { Dashboard } from '@material-ui/icons'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { CalendarToday, MenuBook } from '@material-ui/icons'
import { CalendarViewDayRounded } from '@material-ui/icons'
import CerereConcediuContainer from '../features/CerereConcediu/CererereConcediuContainer'

const menuItems = [

  { icon: <FormatListBulletedIcon />, text: 'Employees', path: '/employees', name: 'Employees' },
  { icon: <CalendarViewDayRounded />, text: 'Toate Concediile', path: '/toateconcediile', nume: 'Toate Concediile' },
  { icon: <MenuBook />, text: 'HolidaysMenu', path: '/holidaysMenu', name: 'HolidaysMenu' },
  { icon: <CalendarToday />, text: 'Cerere Concediu', path: '/CerereConcediuContainer', name: 'CerereConcediu' },
  { icon: <ExitToAppIcon />, text: 'NavBar.Delogare', path: '/logout', name: 'Delogare' }
]

export default menuItems
