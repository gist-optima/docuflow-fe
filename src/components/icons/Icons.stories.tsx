import { Meta, StoryFn } from "@storybook/react";

import Icons from "./Icons";

export default {
  title: "components/icons",
  component: Icons,
} as Meta<typeof Icons>;

const Default: StoryFn<typeof Icons> = (args) => <Icons />;

const Document: StoryFn<typeof Icons> = (args) => <Icons.Document />;

const Chart: StoryFn<typeof Icons> = (args) => <Icons.Chart />;

const Image: StoryFn<typeof Icons> = (args) => <Icons.Image />;

export { Chart, Default, Document, Image };
