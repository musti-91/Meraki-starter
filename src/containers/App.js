// @flow
/* jshint ignore:start */
import * as React from "react";
import { Provider } from "react-redux";
import store from "../store/index";
import PropTypes from "prop-types";

import UserContainer from "./UserContainer";

type DefaultProps = {
  isLoaded: false
};

type Props = {
  isLoaded: ?boolean
};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <div className="app">
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;
/* jshint ignore:end */
