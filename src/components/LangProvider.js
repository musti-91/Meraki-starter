import React from "react"
import { I18n } from "react-polyglot"

/**
 * @author
 * @function LangProvider
 **/

const LangProvider = props => {
  return (
    <I18n locale={props.lang ? props.lang : "en"} messages={props.messages}>
      {props.children}
    </I18n>
  )
}

export default LangProvider
