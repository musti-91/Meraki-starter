import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { fetching, fetchingError, fetchingSuccess } from "../store/actions"
import List from "../components/List"

const fetch = require("node-fetch")
/**
 * @author
 * @function UserContanier
 **/

const UserContanier = ({ users, fetchingError, startFetching, getUsers, getError }) => {
  const [fetching, setFetching] = useState(true)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        startFetching()
        return res.json()
      })
      .then(res => {
        getUsers(res)
        setFetching(false)
      })
      .catch(error => {
        getError(error)
        setFetching(false)
      })
  }, [])

  const onItemClicked = id => {
    console.log(id)
  }
  return (
    <div>
      {fetching && <div>Loading.....</div>}
      {!fetching && users.length !== 0 && <List list={users} click={onItemClicked} />}
    </div>
  )
}

UserContanier.prototype = {
  users: PropTypes.array,
  fetchingError: PropTypes.any,
  // actions
  startFetching: PropTypes.func,
  getUsers: PropTypes.func,
  getError: PropTypes.func
}

UserContanier.defaultProps = {
  users: [],
  fetchingError: {},
  // actions
  startFetching: () => {}, // noop
  getUsers: () => {},
  getError: () => {}
}

const mapStateToProps = state => ({
  users: state.users.users,
  fetchingError: state.users.fetchingError
})
const mapDispatchToProps = dispatch => ({
  startFetching: () => dispatch(fetching()),
  getUsers: users => dispatch(fetchingSuccess(users)),
  getError: error => dispatch(fetchingError(error))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContanier)
