import { ElementType } from "react";
import {
  BellRing,
  BotMessageSquare,
  Calculator,
  CloudSun,
  FileText,
  LucideIcon,
  MapPinned,
  Settings2,
  ShieldAlert,
  Sprout,
  TrendingUp,
} from "lucide-react";

// lib/nav-config.ts
interface NavItem {
  title: string;
  subtitle: string;
  name: string;
  icon: LucideIcon;
}

export const NAV_CONFIG: Record<string, NavItem> = {
  "/": {
    title: "Dashboard Overview",
    subtitle: "Real-time overview of your farm fields",
    name: "Dashboard",
    icon: Sprout,
  },
  "/fields": {
    title: "Field Management",
    subtitle: "Manage your crop fields and soil data",
    name: "Fields",
    icon: MapPinned,
  },
  "/risk-map": {
    title: "Risk Map",
    subtitle: "Real-time risk assessment of your fields",
    name: "Risk Map",
    icon: ShieldAlert,
  },
  "/advisory": {
    title: "Irrigation Advisory",
    subtitle: "AI-powered Irrigation recommendations",
    name: "Advisory",
    icon: BotMessageSquare,
  },
  "/analytics": {
    title: "Analytics & Trends",
    subtitle: "Track field health and performance over time.",
    name: "Analytics",
    icon: TrendingUp,
  },
  "/weather": {
    title: "Weather Intelligence",
    subtitle: "Real-time weather and Irrigation suggestions",
    name: "Weather",
    icon: CloudSun,
  },
  "/calculator": {
    title: "Economic Impact Calculator",
    subtitle: "See how much you can save with smart Irrigation",
    name: "Calculator",
    icon: Calculator,
  },
  "/alerts": {
    title: "Alerts & Notifications",
    subtitle: "Stay updated with important alerts",
    name: "Alerts",
    icon: BellRing,
  },
  "/reports": {
    title: "Reports & Exports",
    subtitle: "Generate and download reports for your fields",
    name: "Reports",
    icon: FileText,
  },
  "/settings": {
    title: "Settings",
    subtitle: "Manage your KrishiRakshak AI preferences and workspace settings",
    name: "Setting",
    icon: Settings2,
  },
};
