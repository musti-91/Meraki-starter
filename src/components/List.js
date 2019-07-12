import React from "react"
import PropTypes from "prop-types"
import { useTransition, animated } from "react-spring"
import Item from "./Item"

/**
 * @author
 * @function List
 **/

const List = ({ list, click, theme }) => {
  const transitions = useTransition(list, item => item.id, {
    from: {
      transform: "translate3d(0,-40px,0)"
    },
    enter: { transform: "translate3d(0,0px,0)" }
  })
  return (
    <ul>
      {transitions.map(({ item, props, key }) => (
        <animated.div style={props} key={key}>
          <Item item={item} click={click} theme={theme} />
        </animated.div>
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
