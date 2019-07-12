import React from "react"
import { shallow, mount } from "enzyme"

import Item from "../Item"
describe("Item", () => {
  const item = { id: 1, name: "Someone" }
  const click = jest.fn().mockName("onClick")

  const wrapper = shallow(<Item item={item} />)

  it("should match its snapshot", done => {
    // ? Why do we need to put (done) function
    // ! because my component should wait until fetching happens from app component
    // ! and then will render this component so it's async
    //* if you want to try to remove done() and test what will happend
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it("should mount Item component", () => {
    mount(<Item item={item} />)
  })

  it("should return id of item clicked", done => {
    const wrap = shallow(<Item click={click} item={item} />)

    // * simulate click function
    // * it means it has been clicked
    wrap.find("li").simulate("click")

    expect(click).toHaveBeenCalled()
    done()
  })
})
