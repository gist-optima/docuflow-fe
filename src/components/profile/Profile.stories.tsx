import { Meta, StoryFn } from "@storybook/react";

import Profile from "./Profile";

export default {
  title: "components/profile",
  component: Profile,
} as Meta<typeof Profile>;

const Template: StoryFn<typeof Profile> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: "https://i.pravatar.cc/300",
};
