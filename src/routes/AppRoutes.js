/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import CustomRoute from '../components/routing/CustomRoute'

import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import Dashboard from 'features/dashboard/Dashboard'
import ToateConcediile from 'features/dashboard/toateconcediile/ToateConcediile'
import HolidaysMenu from 'features/holidaysMenu/HolidaysMenu'
import CerereConcediuContainer from '../components/CerereConcediu/CerereConcediuContainer'
import NewEmployeeContainer from 'features/NewEmployee/NewEmployeeContainer'
import EmployeesPageContainer from 'components/employees/EmployeesPageContainer'

export default function AppRoutes() {
  return (
    <Switch>
      <CustomRoute isPrivate={false} exact path='/dashboard' component={Dashboard} />
      <Redirect exact from='/' to='/dashboard' />
      <CustomRoute isPrivate={false} exact path='/toateconcediile' component={ToateConcediile} />
      <CustomRoute isPrivate={false} exact path='/holidaysMenu' component={HolidaysMenu} />
      <CustomRoute isPrivate={false} exact path='/newEmployee' component={NewEmployeeContainer} />
      <Redirect exact from='/' to='/newEmployee' />
      <CustomRoute isPrivate={false} exact path='/employees' component={EmployeesPageContainer} />
      <CustomRoute isPrivate={false} exact path='/forbidden' component={Forbidden} />
      <CustomRoute isPrivate={false} exact path='/CerereConcediuContainer' component={CerereConcediuContainer} />
      <CustomRoute isPrivate={false} render={() => <NotFound title='PageNotFound'></NotFound>} />
    </Switch>
  )
}
