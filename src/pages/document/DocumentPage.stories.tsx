import { Meta, StoryFn } from "@storybook/react";

import DocumentPage from "./DocumentPage";

export default {
  title: "pages/document",
  component: DocumentPage,
} as Meta<typeof DocumentPage>;

const Template: StoryFn<typeof DocumentPage> = (args) => (
  <DocumentPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
