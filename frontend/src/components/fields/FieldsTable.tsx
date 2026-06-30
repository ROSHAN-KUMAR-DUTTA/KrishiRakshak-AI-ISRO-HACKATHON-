"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Plus,
  MapPin,
  Droplet,
  Eye,
  MoreHorizontal,
  Sprout,
} from "lucide-react";

export interface Field {
  id: string;
  name: string;
  location: string;
  /** Optional photo URL. When omitted, a crop-colored gradient placeholder is shown instead. */
  image?: string;
  crop: string;
  growthStage: string;
  area: number;
  areaUnit: string;
  /** 0–100 */
  health: number;
  irrigationStatus: "Good" | "Moderate" | "Low";
  lastUpdated: string;
}

// Mock data matching the reference design — swap for real API data once wired up.
export const defaultFields: Field[] = [
  {
    id: "field-7",
    name: "Field 7 - North Plot",
    location: "Sindri, Jharkhand",
    crop: "Rice",
    growthStage: "Vegetative",
    area: 2.5,
    areaUnit: "ha",
    health: 85,
    irrigationStatus: "Good",
    lastUpdated: "2 hours ago",
  },
  {
    id: "field-4",
    name: "Field 4 - Central Plot",
    location: "Sindri, Jharkhand",
    crop: "Maize",
    growthStage: "Growing",
    area: 3.2,
    areaUnit: "ha",
    health: 72,
    irrigationStatus: "Moderate",
    lastUpdated: "4 hours ago",
  },
  {
    id: "field-2",
    name: "Field 2 - West Plot",
    location: "Sindri, Jharkhand",
    crop: "Cotton",
    growthStage: "Flowering",
    area: 4.1,
    areaUnit: "ha",
    health: 65,
    irrigationStatus: "Low",
    lastUpdated: "6 hours ago",
  },
  {
    id: "field-1",
    name: "Field 1 - East Plot",
    location: "Sindri, Jharkhand",
    crop: "Wheat",
    growthStage: "Maturity",
    area: 5.0,
    areaUnit: "ha",
    health: 91,
    irrigationStatus: "Good",
    lastUpdated: "1 hour ago",
  },
  {
    id: "field-9",
    name: "Field 9 - South Plot",
    location: "Sindri, Jharkhand",
    crop: "Mustard",
    growthStage: "Flowering",
    area: 2.8,
    areaUnit: "ha",
    health: 70,
    irrigationStatus: "Moderate",
    lastUpdated: "3 hours ago",
  },
];

const cropGradient: Record<string, string> = {
  Rice: "from-emerald-400 to-emerald-700",
  Maize: "from-amber-300 to-amber-600",
  Cotton: "from-teal-300 to-emerald-500",
  Wheat: "from-yellow-300 to-amber-500",
  Mustard: "from-yellow-300 to-amber-600",
};

const irrigationStyles: Record<Field["irrigationStatus"], string> = {
  Good: "bg-green-50 text-green-700",
  Moderate: "bg-amber-50 text-amber-700",
  Low: "bg-orange-50 text-orange-700",
};

function getHealthColor(health: number) {
  if (health >= 80) return "bg-green-500";
  if (health >= 60) return "bg-amber-500";
  return "bg-orange-500";
}

interface FieldsTableProps {
  fields?: Field[];
  onAddField?: () => void;
  onViewField?: (field: Field) => void;
  onFieldMenu?: (field: Field) => void;
}

export default function FieldsTable({
  fields = defaultFields,
  onAddField,
  onViewField,
  onFieldMenu,
}: FieldsTableProps) {
  const [query, setQuery] = useState("");

  const filteredFields = fields.filter((field) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      field.name.toLowerCase().includes(q) ||
      field.crop.toLowerCase().includes(q) ||
      field.location.toLowerCase().includes(q)
    );
  });

  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Header: title + search + filter + sort + add field */}
      <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold text-gray-900">All Fields</h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fields..."
              className="w-56 rounded-lg border border-gray-200 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/15"
            />
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </button>

          <button
            type="button"
            onClick={onAddField}
            className="flex items-center gap-2 rounded-lg bg-emerald-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-900"
          >
            <Plus className="h-4 w-4" />
            Add Field
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-215 border-collapse">
          <thead>
            <tr className="border-y border-gray-100 bg-gray-50/60">
              <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Field Name
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Crop
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Area
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Health
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Irrigation Status
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Last Updated
              </th>
              <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredFields.map((field) => (
              <tr
                key={field.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60"
              >
                {/* Field name + thumbnail + location */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {field.image ? (
                      <img
                        src={field.image}
                        alt={field.name}
                        className="h-11 w-14 shrink-0 rounded-lg object-cover"
                      />
                    ) : (
                      <div
                        className={`flex h-11 w-14 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${
                          cropGradient[field.crop] ?? "from-gray-300 to-gray-500"
                        }`}
                      >
                        <Sprout className="h-5 w-5 text-white/90" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {field.name}
                      </p>
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-400">
                        <MapPin className="h-3 w-3" />
                        {field.location}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Crop + growth stage */}
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-900">{field.crop}</p>
                  <p className="mt-0.5 text-xs text-green-600">{field.growthStage}</p>
                </td>

                {/* Area */}
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                  {field.area.toFixed(1)} {field.areaUnit}
                </td>

                {/* Health % + bar */}
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-gray-900">{field.health}%</p>
                  <div className="mt-1.5 h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${getHealthColor(field.health)}`}
                      style={{ width: `${Math.min(field.health, 100)}%` }}
                    />
                  </div>
                </td>

                {/* Irrigation status badge */}
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                      irrigationStyles[field.irrigationStatus]
                    }`}
                  >
                    <Droplet className="h-3 w-3" />
                    {field.irrigationStatus}
                  </span>
                </td>

                {/* Last updated */}
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {field.lastUpdated}
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onViewField?.(field)}
                      aria-label={`View ${field.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onFieldMenu?.(field)}
                      aria-label={`More options for ${field.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredFields.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-10 text-center text-sm text-gray-400">
                  No fields match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}