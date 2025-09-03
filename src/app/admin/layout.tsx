import React from "react";
import Sidebar from "../_components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout flex">
      <Sidebar />
      <div className="container">{children}</div>
    </div>
  );
}
