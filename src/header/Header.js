import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment >
    <Link  to="/change-password">Change Password</Link>
    <Link  to="/sign-out">Sign Out</Link>
      <Link to="/map/add">Add mosque</Link>
      <Link to="/user_page">My Page</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link  to="/sign-in">Sign In</Link>
    <Link to="/map/view">View mosques</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link  to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <nav >
      { user && <span className="user">Welcome, {user.userName}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
