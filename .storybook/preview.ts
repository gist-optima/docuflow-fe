import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import "../src/index.css";
import "../src/normalize.css";

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
