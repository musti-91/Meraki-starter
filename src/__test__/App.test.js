/* jshint ignore:start */

import React from "react";
import { mount, shallow } from "enzyme";

import App from "../containers/App";
/**
 * function
 * wrapper.setProps({ any: true})
 * wrapper.get(0) => first element render in this wrapper
 * wrapper.instance().props.any=> get any Props from the component
 * wrapper.find("a").length=> return how many elements renders with this selector.
 * mount:> full dom render component
 */
describe("App", () => {
  const wrapper = shallow(<App />);

  it("should render App", () => {
    mount(<App />);
  });

  it("should render App", () => {
    const div = wrapper.find(".app");

    expect(div.hasClass("app")).toBe(true);
  });

  it("should match it's snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
/** jshint ignore:end */
