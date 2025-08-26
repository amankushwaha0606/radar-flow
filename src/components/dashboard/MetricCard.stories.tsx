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
    title: "Engagements",
    value: 120,
    deltaPct: 0.15,
  },
};

export const NegativeDelta: Story = {
  args: {
    title: "Engagement Rate",
    value: "80%",
    deltaPct: -0.05,
  },
};
