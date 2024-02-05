import { Meta, StoryFn } from "@storybook/react";

import SearchVectorButton from "./SearchVectorButton";

export default {
  title: "components/searchVectorButton",
  component: SearchVectorButton,
} as Meta<typeof SearchVectorButton>;

const Template: StoryFn<typeof SearchVectorButton> = (args) => (
  <SearchVectorButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  keyword: "Keyword",
};
