import type { Meta, StoryObj } from "@storybook/react";
import ContentToPromoteCard from "./ContentToPromoteCard";

const meta: Meta<typeof ContentToPromoteCard> = {
  title: "Dashboard/ContentToPromoteCard",
  component: ContentToPromoteCard,
};

export default meta;
type Story = StoryObj<typeof ContentToPromoteCard>;

export const Default: Story = {};
