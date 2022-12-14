/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import CustomRoute from '../components/routing/CustomRoute'
import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import Dashboard from 'features/dashboard/Dashboard'
import ToateConcediile from 'features/dashboard/toateconcediile/ToateConcediile.js'
import HolidaysMenu from 'features/holidaysMenu/HolidaysMenu'
import CerereConcediuContainer from '../features/CerereConcediu/CererereConcediuContainer'
import NewEmployeeContainer from 'features/NewEmployee/NewEmployeeContainer'
import EmployeesPageContainer from 'features/employees/EmployeesPageContainer'
import DateleMeleContainer from '../features/MyProfile/DateleMeleContainer'
import LogoutContainer from 'features/Logout/LogoutContainer'

export default function AppRoutes() {
  return (
    <Switch>
      <CustomRoute isPrivate={false} exact path='/dashboard' component={Dashboard} />
      <Redirect exact from='/logging' to='/myProfile' />
      <CustomRoute isPrivate={false} exact path='/toateconcediile' component={ToateConcediile} />
      <CustomRoute isPrivate={false} exact path='/holidaysMenu' component={HolidaysMenu} />
      <CustomRoute isPrivate={false} exact path='/newEmployee' component={NewEmployeeContainer} />
      <CustomRoute isPrivate={false} exact path='/employees' component={EmployeesPageContainer} />
      <CustomRoute isPrivate={false} exact path='/forbidden' component={Forbidden} />
      <CustomRoute isPrivate={false} exact path='/CerereConcediuContainer' component={CerereConcediuContainer} />
      <CustomRoute isPrivate={false} exact path='/myProfile' component={DateleMeleContainer} />
      <CustomRoute isPrivate={false} exact path='/logout' component={LogoutContainer} />
      <CustomRoute isPrivate={false} render={() => <NotFound title='PageNotFound'></NotFound>} />
    </Switch>
  )
}
