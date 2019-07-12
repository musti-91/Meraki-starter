import React from "react"
import PropTypes from "prop-types"
import { translate } from "react-polyglot"
/**
 * @author
 * @function Item
 **/

const Item = ({ item, click, theme, t }) => {
  return (
    <li className="item" onClick={() => click(item.id)} style={theme}>
      <h2>
        {t("name")}:<p>{item.name}</p>
      </h2>
    </li>
  )
}

Item.prototype = {
  item: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  click: PropTypes.func,
  theme: PropTypes.object
}
Item.defaultProps = {
  // * noop
  click: () => {},
  theme: {}
}
export default translate()(Item)
