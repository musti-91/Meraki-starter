import React from "react"
import PropTypes from "prop-types"

import Item from "./Item"

/**
 * @author
 * @function List
 **/

const List = ({ list, click, theme }) => {
  return (
    <ul>
      {list.map(i => (
        <Item item={i} key={i.id} click={click} theme={theme} />
      ))}
    </ul>
  )
}
List.prototype = {
  list: PropTypes.array.isRequired,
  click: PropTypes.func,
  theme: PropTypes.object
}
List.defaultProps = {
  // * noop
  click: () => {},
  theme: {}
}
export default List
