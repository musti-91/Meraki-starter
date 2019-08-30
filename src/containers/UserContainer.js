/* jshint ignore:start */
// @flow
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  fetching,
  fetchingError,
  fetchingSuccess,
  changeLang
} from "../store/actions";

import { LangProvider, List } from '../components'
import messages from "../utils/messages";
const fetch = require("node-fetch");
/**
 * @author
 * @function UserContainer
 **/

type Props = {
  users: [],
  fetchingError: any,
  startFetching: () => {},
  getUsers: (users: []) => {},
  getError: (error: any) => {},
  lang: string,
  changeLanguage: () => {}
};
const UserContainer = ({
  users,
  fetchingError,
  startFetching,
  getUsers,
  getError,
  lang,
  changeLanguage
}: Props) => {
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        startFetching();
        return res.json();
      })
      .then(res => {
        getUsers(res);
        setFetching(false);
      })
      .catch(error => {
        getError(error);
        setFetching(false);
      });
  }, []);

  const onItemClicked = (id: any) => {
    // console.log(id)
  };

  const global_colors = {
    backgroundColor: lang == "nl" && "#A28B55",
    color: lang == "nl" && "#ccc"
  };

  const colors = {
    backgroundColor: lang == "en" && "#A28B55",
    color: lang == "en" ? "#2C2D3D" : "#fff"
  };

  return (
    <LangProvider locale={lang} messages={messages[lang]}>
      <div>
        <button
          onClick={() => changeLanguage()}
          className="lang_btn"
          style={global_colors}
        >
          {lang == "en" ? lang : "nl"}
        </button>
        {fetching && <div>Loading.....</div>}
        {!fetching && users.length !== 0 && (
          <List list={users} click={onItemClicked} theme={colors} />
        )}
      </div>
    </LangProvider>
  );
};


const mapStateToProps = state => ({
  users: state.users.users,
  fetchingError: state.users.fetchingError,
  lang: state.users.lang
});
const mapDispatchToProps = dispatch => ({
  startFetching: () => dispatch(fetching()),
  getUsers: users => dispatch(fetchingSuccess(users)),
  getError: error => dispatch(fetchingError(error)),
  // change language
  changeLanguage: () => dispatch(changeLang())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
/* jshint ignore:end */
