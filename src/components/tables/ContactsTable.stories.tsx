import type { Meta, StoryObj } from "@storybook/react";
import ContactsTable from "./ContactsTable";
import { rest } from "msw";

const meta: Meta<typeof ContactsTable> = {
  title: "Tables/ContactsTable",
  component: ContactsTable,
  parameters: {
    msw: {
      handlers: [
        rest.get("/contacts", (req, res, ctx) =>
          res(
            ctx.json({
              totalItems: 1,
              currentOffset: 0,
              content: [
                {
                  id: "201",
                  firstName: "Alice",
                  lastName: "Johnson",
                  email: "alice@amazon.com",
                  company: "Amazon",
                  insights: 45,
                  recommendations: 12,
                  industry: "Tech",
                  jobTitle: "CTO",
                  stage: "LEAD",
                },
              ],
            })
          )
        ),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactsTable>;

export const Default: Story = {};
