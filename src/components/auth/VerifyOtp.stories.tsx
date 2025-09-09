import type { Meta, StoryObj } from "@storybook/react";
import VerifyOtp from "./VerifyOtp";

const meta: Meta<typeof VerifyOtp> = {
  title: "Auth/VerifyOtp",
  component: VerifyOtp,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof VerifyOtp>;

export const Default: Story = {};
