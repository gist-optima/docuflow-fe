import { Meta, StoryFn } from "@storybook/react";

import Header from "./Header";

export default {
  title: "components/header",
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});
Default.args = {};
