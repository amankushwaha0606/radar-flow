import type { Meta, StoryObj } from "@storybook/react";
import CompetitorsTable from "./CompetitorsTable";

const meta: Meta<typeof CompetitorsTable> = {
  title: "Tables/CompetitorsTable",
  component: CompetitorsTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A fully interactive table for managing competitor data with inline editing capabilities. Features real-time updates, responsive design, and comprehensive error handling.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CompetitorsTable>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Default view showing competitor data with editing capabilities. Click on any row to edit inline.",
      },
    },
  },
};

export const EmptyState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Empty state when no competitor data is available. Shows appropriate messaging and call-to-action.",
      },
    },
  },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Loading state with skeleton animation while data is being fetched.",
      },
    },
  },
};
