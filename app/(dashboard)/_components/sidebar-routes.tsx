"use client";
import { Compass, Layout } from "lucide-react";
import SidebarItem from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

export default function SidebarRoutes() {
  return <div className="flex flex-col w-full">
    {guestRoutes.map((route) => (
        <SidebarItem icon={route.icon} label={route.label} href={route.href} />
    ))}
  </div>;
}
