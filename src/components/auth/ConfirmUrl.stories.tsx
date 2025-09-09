import type { Meta, StoryObj } from "@storybook/react";
import ConfirmUrl from "./ConfirmUrl";

const meta: Meta<typeof ConfirmUrl> = {
  title: "Auth/ConfirmUrl",
  component: ConfirmUrl,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmUrl>;

export const Default: Story = {};
