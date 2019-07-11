import React from "react"
import { shallow, mount } from "enzyme"

import List from "../List"

describe("List", () => {
  const list = [{ name: "something", id: 2 }]
  const wrapper = shallow(<List list={list} />)

  it("should render List", done => {
    mount(<List list={list} />)
    done()
  })

  it("should match snapshot", done => {
    expect(wrapper).toMatchSnapshot()
    done()
  })
})