/* jshint ignore:start */
// @flow
import React from "react"

type Props = {
  onChange: () => {},
  label: string
}
const InputField = ({ onChange, label }: Props) => <input placeholder={label} onChange={onChange} />

export default InputField
/* jshint ignore:end */
