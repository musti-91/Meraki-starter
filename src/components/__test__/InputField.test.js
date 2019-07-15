/* jshint ignore:start */

import React from "react";
import { shallow, mount } from "enzyme";
import InputField from "../InputField";

describe("InputField", () => {
  const change = jest.fn().mockName("onChange");

  const wrapper = shallow(<InputField onChange={change} />);

  it("should match its snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change item value of input", () => {
    // * this will be used for input field to make change
    // * it's like simulate on Button Click but this on (OnChange)
    wrapper.find("input").prop("onChange")({
      target: {
        value: "new Value"
      }
    });

    expect(change).toHaveBeenCalledWith({ target: { value: "new Value" } });
  });
});
/* jshint ignore:end */
