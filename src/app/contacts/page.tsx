"use client";

import DataTable from "../../components/common/DataTable";
import ContactsTable from "@/components/tables/ContactsTable";

export default function ContactsPage() {
  // const columns = [
  //   { key: "firstName", label: "First Name" },
  //   { key: "lastName", label: "Last Name" },
  //   { key: "email", label: "Email" },
  //   { key: "company", label: "Company" },
  //   { key: "jobTitle", label: "Job Title" },
  //   { key: "stage", label: "Stage" },
  // ];

  return <ContactsTable />;
}
