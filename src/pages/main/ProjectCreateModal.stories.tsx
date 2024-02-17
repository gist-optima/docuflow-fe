import { Meta, StoryFn } from "@storybook/react";

import ProjectCreateModal from "./ProjectCreateModal";

export default {
  title: "pages/main/ProjectCreateModal",
  component: ProjectCreateModal,
} as Meta<typeof ProjectCreateModal>;

const Template: StoryFn<typeof ProjectCreateModal> = (args) => (
  <ProjectCreateModal {...args} />
);

export const Default = Template.bind({});
Default.args = {};
