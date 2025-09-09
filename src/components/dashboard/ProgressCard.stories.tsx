import type { Meta, StoryObj } from "@storybook/react";
import ProgressCard from "./ProgressCard";

const meta: Meta<typeof ProgressCard> = {
  title: "Dashboard/ProgressCard",
  component: ProgressCard,
};

export default meta;
type Story = StoryObj<typeof ProgressCard>;

export const Default: Story = {};
