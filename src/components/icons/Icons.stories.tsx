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

const Kebab: StoryFn<typeof Icons> = (args) => <Icons.Kebab />;

const Export: StoryFn<typeof Icons> = (args) => <Icons.Export />;

const Write: StoryFn<typeof Icons> = (args) => <Icons.Write />;

const Branch: StoryFn<typeof Icons> = (args) => <Icons.Branch />;

const Triangle: StoryFn<typeof Icons> = (args) => <Icons.Triangle />;

const Send: StoryFn<typeof Icons> = (args) => <Icons.Send />;

const DownArrow: StoryFn<typeof Icons> = (args) => <Icons.DownArrow />;

const UpAngle: StoryFn<typeof Icons> = (args) => <Icons.UpAngle />;

export {
  Branch,
  Chart,
  Default,
  Document,
  DownArrow,
  Export,
  Image,
  Kebab,
  Send,
  Triangle,
  UpAngle,
  Write,
};
