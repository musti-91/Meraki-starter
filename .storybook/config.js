import { configure } from "@storybook/react"

// automatically import all files ending in *.stories.js

import "../src/assets/index.scss"
import { addDecorator } from "@storybook/react/dist/client/preview"
import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs"

const req = require.context("../stories", true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withInfo)
addDecorator(withKnobs)
configure(loadStories, module)
