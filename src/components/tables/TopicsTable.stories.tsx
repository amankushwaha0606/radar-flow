import type { Meta, StoryObj } from "@storybook/react";
import TopicsTable from "./TopicsTable";

const meta: Meta<typeof TopicsTable> = {
  title: "Tables/TopicsTable",
  component: TopicsTable,
};

export default meta;
type Story = StoryObj<typeof TopicsTable>;

export const Default: Story = {};
