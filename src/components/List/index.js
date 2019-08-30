/* jshint ignore:start */
// @flow
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import Loader from "../Loader";
import ListItem from "../ListItem";

/**
 * @author
 * @function List
 **/
type Props = {
  list: [],
  click: (id: any) => any,
  theme: Object
};
const List = ({ list, click, theme }: Props) => {
  const transitions = useTransition(list, item => item.id, {
    from: {
      transform: "translate3d(0,-40px,0)"
    },
    enter: { transform: "translate3d(0,0px,0)" }
  });

  return (
    <ul>
      {transitions.map(({ item, props, key }) => (
        <animated.div style={props} key={key}>
          <ListItem item={item} click={click} theme={theme} />
        </animated.div>
      ))}
    </ul>
  );
};

export default Loader()(List);
/* jshint ignore:end */
