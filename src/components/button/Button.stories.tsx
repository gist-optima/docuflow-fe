import { Meta, StoryFn } from "@storybook/react";

import Icons from "../icons/Icons";
import Button from "./Button";

export default {
  title: "components/button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Icons.Chat />,
  children: <p>Chat</p>,
};
