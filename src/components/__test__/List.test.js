import React from "react"
import { shallow, mount } from "enzyme"

import List from "../List"

describe("List", () => {

  const list = [{ name: "something", id: 2 }]
  const wrapper = shallow(<List list={list} />)
  it("should mount List", () => {
    mount(<List list={list} />)
  })

  it("should find (li) element", () => {
    const li = wrapper.find("li")
    expect(li.hasClass("item")).toEqual(true)
    expect(li.childAt(0).type()).toEqual("h3")
  })

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
