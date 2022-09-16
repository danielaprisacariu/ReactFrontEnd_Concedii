import React from 'react'
import Person from '@material-ui/icons/Person'
import { CalendarViewDayRounded } from '@material-ui/icons'

const userMenuItems = [{ icon: <Person />, text: 'MyProfile', path: '/myProfile', name: 'MyProfile' },
                        {icon: <CalendarViewDayRounded/> ,text: 'Toate Concediile', path: '/toateconcediile', nume:'Toate Concediile'}]

export default userMenuItems
