import type { Meta, StoryObj } from "@storybook/react";
import CreateAccount from "./CreateAccount";

const meta: Meta<typeof CreateAccount> = {
  title: "Auth/CreateAccount",
  component: CreateAccount,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CreateAccount>;

export const Default: Story = {};
