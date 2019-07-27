/* jshint ignore:start */

import React from "react";
import { mount, shallow } from "enzyme";

import App from "../containers/App";
const {Builder, Key, By, until } = require('selenium-webdriver')
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
  it('should find .App class', ()=> {
    // const driver= new Builder().forBrowser('chrome').build()
    // let langButton= null
    // driver.get("http://10.150.144.5:8080")
    // .then((res)=> {
    //   console.log("Start Automated testing")
    //   langButton= driver.findElement(By.className('lang_btn'))
    //
    //   langButton.click()
    // })

    // .catch(error => {
    //   langButton= null
    //   console.log(error)
    // })

  })
});
/** jshint ignore:end */
