import type { Meta, StoryObj } from "@storybook/react";
import TopicRadar from "./TopicRadar";

const meta: Meta<typeof TopicRadar> = {
  title: "Dashboard/TopicRadar",
  component: TopicRadar,
};

export default meta;
type Story = StoryObj<typeof TopicRadar>;

export const Default: Story = {};
