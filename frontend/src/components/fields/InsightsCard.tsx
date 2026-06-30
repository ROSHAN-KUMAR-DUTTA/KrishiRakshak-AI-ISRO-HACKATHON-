import type { LucideIcon } from "lucide-react";

export type InsightTone = "green" | "blue" | "purple";

const toneStyles: Record<InsightTone, { bg: string; icon: string }> = {
  green: { bg: "bg-[#e2f1e6]", icon: "text-green-600" },
  blue: { bg: "bg-[#eaf4f6]", icon: "text-blue-600" },
  purple: { bg: "bg-[#f1ecf7]", icon: "text-purple-600" },
};

interface InsightsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Controls the icon swatch color. Defaults to green. */
  tone?: InsightTone;
  /** Optional — if provided, the card becomes clickable (e.g. to filter the table below). */
  onClick?: () => void;
}

export default function InsightsCard({
  icon: Icon,
  title,
  description,
  tone = "green",
  onClick,
}: InsightsCardProps) {
  const styles = toneStyles[tone];
  const interactive = Boolean(onClick);

  return (
    <div
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
      className={`flex items-start gap-3 justify-center  ${
        interactive ? "group cursor-pointer focus:outline-none" : ""
      }`}
    >
      <div
        className={`flex h-15 w-15 shrink-0 items-center justify-center rounded-xl ${styles.bg}`}
      >
        <Icon className={`h-6 w-6 ${styles.icon}`} />
      </div>
      <div className="min-w-0">
        <p
          className={`text-sm font-semibold text-gray-900 ${
            interactive ? "group-hover:underline" : ""
          }`}
        >
          {title}
        </p>
        <p className="mt-0.5 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}