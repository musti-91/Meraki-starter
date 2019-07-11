import React from "react"
import PropTypes from "prop-types"
/**
 * @author
 * @function Item
 **/

const Item = ({ item, click }) => {
  return (
    <li className="item" onClick={() => click(item.id)}>
      <h3>{item.name}</h3>
    </li>
  )
}

Item.prototype = {
  item: PropTypes.object.isRequired,
  click: PropTypes.func
}
Item.defaultProps = {
  // * noop
  click: () => {}
}
export default Item
