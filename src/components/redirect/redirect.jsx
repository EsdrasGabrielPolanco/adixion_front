import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = localStorage.getItem("sessionToken")

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Redirect to={{ pathname: '/home', state: { from: props.location } }} />

        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute