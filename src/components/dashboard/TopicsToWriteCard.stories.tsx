import type { Meta, StoryObj } from "@storybook/react";
import TopicsToWriteCard from "./TopicsToWriteCard";

const meta: Meta<typeof TopicsToWriteCard> = {
  title: "Dashboard/TopicsToWriteCard",
  component: TopicsToWriteCard,
};

export default meta;
type Story = StoryObj<typeof TopicsToWriteCard>;

export const Default: Story = {};
