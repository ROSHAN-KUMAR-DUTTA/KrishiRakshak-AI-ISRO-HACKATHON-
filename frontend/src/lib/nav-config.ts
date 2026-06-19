// lib/nav-config.ts
interface NavItem {
  title: string;
  subtitle: string;
  name: string;
}

export const NAV_CONFIG: Record<string, NavItem> = {
  "/": { title: "Dashboard Overview", subtitle: "Real-time overview of your farm fields", name: "Dashboard" },
  "/fields": { title: "Field Management", subtitle: "Manage your crop fields and soil data", name: "Fields" },
  "/risk-map": { title: "Risk Map", subtitle: "Real-time risk assessment of your fields", name: "Risk Map" },
  "/advisory": { title: "Irrigation Advisory", subtitle: "AI-powered Irrigation recommendations", name: "Advisory" },
  "/analytics": { title: "Analytics & Trends", subtitle: "Track field health and performance over time.", name: "Analytics" },
  "/weather": { title: "Weather Intelligence", subtitle: "Real-time weather and Irrigation suggestions", name: "Weather" },
  "/calculator": { title: "Economic Impact Calculator", subtitle: "See how much you can save with smart Irrigation", name: "Calculator" },
  "/alerts": { title: "Alerts & Notifications", subtitle: "Stay updated with important alerts", name: "Alerts" },
  "/reoprts": { title: "Reports & Exports", subtitle: "Generate and download reports for your fields", name: "Reports" },
  "/settings": { title: "Settings", subtitle: "Manage your KrishiRakshak AI preferences and workspace settings", name: "Setting" },

};