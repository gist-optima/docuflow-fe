import { Meta, StoryFn } from "@storybook/react";

import ProjectItem from "./ProjectItem";

export default {
  title: "components/projectItem/ProjectItem",
  component: ProjectItem,
} as Meta<typeof ProjectItem>;

const Template: StoryFn<typeof ProjectItem> = (args) => (
  <ProjectItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  project: {
    id: 1,
    name: "Project 1",
    description: "This is project 1",
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
};
