import React from "react"
import { shallow, mount } from "enzyme"

import List from "../List"

describe("List", () => {
  const list = [{ name: "something", id: 2 }]
  const wrapper = shallow(<List list={list} />, { disableLifecycleMethods: true })

  it("should render List", () => {
    mount(<List list={list} />)
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
