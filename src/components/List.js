import React from "react"
import PropTypes from "prop-types"

import Item from "./Item"

/**
 * @author
 * @function List
 **/

const List = ({ list, click }) => {
  return (
    <ul>
      {list.map(i => (
        <Item item={i} key={i.id} click={click} />
      ))}
    </ul>
  )
}
List.prototype = {
  list: PropTypes.array.isRequired,
  click: PropTypes.func
}
List.defaultProps = {
  // * noop
  click: () => {}
}
export default List
