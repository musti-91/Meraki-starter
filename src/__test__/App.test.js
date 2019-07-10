import React from "react"
import { mount, shallow } from "enzyme"

import App from "../containers/App"

describe("App", () => {
  const wrapper = shallow(<App />)
  it("should render App", () => {
    mount(<App />)
  })
  it("should render App", () => {
    const div = wrapper.find(".app")

    expect(div.hasClass("app")).toBe(true)
  })
  it("should match it's snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
