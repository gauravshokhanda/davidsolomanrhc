"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Don't apply admin layout to login and register pages
  if (pathname === "/admin/login" || pathname === "/admin/register") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#f5f7f5]">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-[#f5f7f5]">
        {children}
      </div>
    </div>
  );
}