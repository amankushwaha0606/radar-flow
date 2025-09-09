import type { Meta, StoryObj } from "@storybook/react";
import MetricCard from "./MetricCard";

const meta: Meta<typeof MetricCard> = {
  title: "Dashboard/MetricCard",
  component: MetricCard,
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  args: {
    title: "New personalized engagements",
    value: 120,
    deltaPct: 0.16,
  },
};
