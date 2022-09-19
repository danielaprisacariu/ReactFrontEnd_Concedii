import React from 'react'
import { Add, Dashboard } from '@material-ui/icons'

const menuItems = [{ icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
                    { icon: <Add />, text: 'NavBar.NewEmployee', path: '/newEmployee', name: 'NewEmployee' }]

export default menuItems
