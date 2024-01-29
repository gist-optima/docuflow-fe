import { Meta, StoryFn } from "@storybook/react";

import ProfileImage from "./ProfileImage";

export default {
  title: "components/profileImage",
  component: ProfileImage,
} as Meta<typeof ProfileImage>;

const Template: StoryFn<typeof ProfileImage> = (args) => (
  <ProfileImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "https://avatars.githubusercontent.com/u/1785573?v=4",
  alt: "Profile image",
  width: 100,
  height: 100,
};
