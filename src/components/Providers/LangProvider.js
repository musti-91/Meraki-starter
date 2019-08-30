/* jshint ignore:start */
// @flow
import React from "react";
import { I18n } from "react-polyglot";

/**
 * @author
 * @function LangProvider
 **/

type Props = {
  locale: string,
  messages: Object,
  children: any
};
const LangProvider = ({ locale, messages, children }: Props) => {
  return (
    <I18n locale={locale ? locale : "en"} messages={messages}>
      {children}
    </I18n>
  );
};

export default LangProvider;
/* jshint ignore:end */
