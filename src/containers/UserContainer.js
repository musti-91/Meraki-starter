import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { fetching, fetchingError, fetchingSuccess } from "../store/actions"
import List from "../components/List"
/**
 * @author
 * @function UserContanier
 **/

const UserContanier = ({ users, fetchingError, startFetching, getUsers, getError }) => {
  const [fetching, setFetching] = useState(true)
  useEffect(() => {
    fetch("")
      .then(res => {
        startFetching()
        return res.json()
      })
      .then(res => {
        fetchingSuccess(res)
        setFetching(false)
      })
      .catch(error => {
        getError(error)
        setFetching(false)
      })
  })
  return (
    <div>
      {fetching && <div>Loading.....</div>}
      {!fetching && users.length !== 0 && <List list={users} />}
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
