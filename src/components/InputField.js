// @ts-check
import React from "react"
import PropTypes from "prop-types"

const InputField = ({ onChange, label }) => <input placeholder={label} onChange={onChange} />

InputField.propsTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

InputField.defaultProps = {
  label: "Example input for testing"
}

export default InputField
