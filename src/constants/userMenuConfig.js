import React from 'react'
import Person from '@material-ui/icons/Person'
import { CalendarToday, MenuBook } from '@material-ui/icons'
import { CalendarViewDayRounded } from '@material-ui/icons'

const userMenuItems = [{ icon: <Person />, text: 'MyProfile', path: '/myProfile', name: 'MyProfile' },
                        {icon: <CalendarViewDayRounded/> ,text: 'Toate Concediile', path: '/toateconcediile', nume:'Toate Concediile'},  
                        {icon:<MenuBook/>,text:'HolidaysMenu',path:'/holidaysMenu',name:'HolidaysMenu'}]

export default userMenuItems
