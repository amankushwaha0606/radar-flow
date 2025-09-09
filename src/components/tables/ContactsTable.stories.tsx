import type { Meta, StoryObj } from "@storybook/react";
import ContactsTable from "./ContactsTable";

const meta: Meta<typeof ContactsTable> = {
  title: "Tables/ContactsTable",
  component: ContactsTable,
};

export default meta;
type Story = StoryObj<typeof ContactsTable>;

export const Default: Story = {};
