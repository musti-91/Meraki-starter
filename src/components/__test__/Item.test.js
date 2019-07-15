import React from "react"
import { shallow, mount } from "enzyme"

import Item from "../Item"
describe("Item", () => {
  const item = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }
  const click = jest.fn().mockName("onClick")

  const wrapper = shallow(<Item item={item} click={click} />, { disableLifecycleMethods: true })

  it("should match its snapshot", () => {
    // ? Why do we need to put (done) function
    // ! because my component should wait until fetching happens from app component
    // ! and then will render this component so it's async
    //* if you want to try to remove done() and test what will happend
    expect(wrapper).toMatchSnapshot()
  })

  it("should mount Item component", () => {
    mount(<Item item={item} />)
  })

  it("should return id of item clicked", () => {
    // * simulate click function
    // * it means it has been clicked
    const li = wrapper.find("li")

    expect(li.exists()).toBeTruthy()

    li.simulate("click")
    expect(click).toHaveBeenCalled()
  })
})
