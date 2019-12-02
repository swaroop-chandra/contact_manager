import React from 'react'
import axios from './config/axios'
import {connect} from 'react-redux'
import {Nav,Navbar} from 'react-bootstrap'
import Swal from 'sweetalert2'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'

import Login from './components/users/login'
import Register from './components/users/register'

import ContactList from './components/contacts/List'
import AddContact from './components/contacts/addContact'
import EditContact from './components/contacts/editContact'
import ShowContact from './components/contacts/showContact'


import {BrowserRouter , Route,Link ,Switch} from 'react-router-dom'
function handleClick(){
  axios.delete('/users/logout',{
    headers:{
      'x-auth':localStorage.getItem('authToken')
    }
  })
  .then(response=>{
    Swal.fire({
      icon: 'success',
      title: 'successfully logged out.!',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(()=>{
      localStorage.removeItem('authToken')
      window.location.href='/users/login'
    },1000)
  })
}

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar className='bckcolor'>
      <Navbar.Brand ><Link to='/contacts' className='padding mr-3 text-decoration-none text-white'>Contact Manager</Link></Navbar.Brand>
      {!localStorage.getItem('authToken') ? <Nav.Item>
        {/* <Link to='/users/register' className='padding mr-3 text-decoration-none text-info'>register</Link>  */}
      {/* <Link to='/users/login' className='padding mr-3 text-decoration-none text-info'>Login</Link>  */}
      </Nav.Item>:<Nav.Item>
      <Link to='/contacts' className='padding mr-3 text-decoration-none text-info'>Contact</Link>
      <Link to='#' className='padding mr-3 text-decoration-none text-info float-right' onClick={handleClick}>Logout</Link>
      </Nav.Item>}
      </Navbar>
      

      {/* <Route path='/' component={Home} exact={true}/> */}
      <Route path='/users/register' component={Register}/>
      <Route path='/users/login' component={Login}/>

      <Switch>
      <PrivateRoute path='/contacts' component={ContactList} exact={true}/>
      <PrivateRoute path='/contacts/add' component={AddContact}/>
      <PrivateRoute path='/contacts/edit/:id' component={EditContact}/>
      <PrivateRoute path='/contacts/:id' component={ShowContact}/>
      </Switch>

    </div>
    </BrowserRouter>
  )
}


export default connect()(App)