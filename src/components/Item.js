/* jshint ignore:start */
// @flow
import React, { useState } from "react";
import PropTypes from "prop-types";
import { translate } from "react-polyglot";

import Fab from "@material-ui/core/Fab";
import FilterList from "@material-ui/icons/FilterList";
/**
 * @author
 * @function Item
 **/
type Props = {
  item: any,
  click: (id: any) => any,
  theme: any,
  t: (key: any) => any
};
const Item = ({ item, click, theme, t }: Props) => {
  const [resize, setResize] = useState(false);
  // TODO set animation for resize li

  const commonTheme = {
    ...theme,
    backgroundColor: resize ? "#cccddd" : theme.backgroundColor,
    height: resize ? 500 : "inherit"
  };
  return (
    <li className="item" onClick={() => click(item.id)} style={commonTheme}>
      <FilterList
        onClick={() => setResize(!resize)}
        className="fab"
        fontSize="large"
        style={{ color: resize && theme.backgroundColor }}
      />
      <h3>
        {t("name")}:{item.name}
      </h3>
      <h4>
        {t("description")}:{item.company && item.company.catchPhrase}
      </h4>
      {resize && (
        <div>
          <h5>Email: {item.email}</h5>
          <h5>
            {t("phone")}: {item.phone}
          </h5>
          <h5>
            {t("company")}: {item.company.name}
          </h5>
          <h5>
            {t("address")}: {item.address.street}-{item.address.suite}
          </h5>
        </div>
      )}
    </li>
  );
};

// Item.prototype = {
//   item: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     phone: PropTypes.string,
//     email: PropTypes.string,
//     website: PropTypes.string,
//     username: PropTypes.string,
//     company: PropTypes.shape({
//       name: PropTypes.string,
//       catchPhrase: PropTypes.string,
//       bs: PropTypes.string
//     }),
//     address: PropTypes.shape({
//       street: PropTypes.string,
//       suite: PropTypes.string,
//       city: PropTypes.string,
//       zipcode: PropTypes.string,
//       geo: PropTypes.shape({
//         lat: PropTypes.string,
//         lng: PropTypes.string
//       })
//     })
//   }).isRequired,
//   t: PropTypes.func,
//   click: PropTypes.func,
//   theme: PropTypes.object
// }
Item.defaultProps = {
  // * noop
  click: () => {},
  theme: {},
  t: id => {}
};
export default translate()(Item);
/* jshint ignore:end */
