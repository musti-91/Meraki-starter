/* jshint ignore:start */
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import List from "../src/components/List";
const stories = storiesOf("List", module);

const dummyList = [
  {
    name: "another one",
    id: 1
  },
  {
    id: 2,
    name: "DJ Khaled"
  }
];
stories.add("Default", () => (
  <List list={dummyList} click={action("clicked")} />
));
/* jshint ignore:end */
