import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import './style.scss'
// import css from 'file.css'

import Home from './components/common/Home'
import NavBar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PageContainer from './components/common/PageContainer'
import CarsIndex from './components/cars/CarsIndex'
import CarsShow from './components/cars/CarsShow'
import CarsNew from './components/cars/CarsNew'

const App = () => {

  return (
    <BrowserRouter>
      <PageContainer>
        <NavBar/>
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/cars/new" component={CarsNew}/>
          <Route path="/cars/:id" component={CarsShow}/>
          <Route path="/cars" component={CarsIndex}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </PageContainer>
    </BrowserRouter>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
