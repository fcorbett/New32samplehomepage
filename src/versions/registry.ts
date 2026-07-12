import type { ComponentType, LazyExoticComponent } from "react";
import { lazy } from "react";

export type VersionEntry = {
  id: string;
  label: string;
  description: string;
  default?: boolean;
  component: LazyExoticComponent<ComponentType>;
};

export const versions: VersionEntry[] = [
  {
    id: "v1-editorial",
    label: "V1 — Editorial split",
    description: "Original Figma prototype",
    component: lazy(() => import("./v1-editorial/App")),
  },
  {
    id: "v2-refinement",
    label: "V2 — Client refinement",
    description: "May 2026 — client feedback",
    default: true,
    component: lazy(() => import("./v2-refinement/App")),
  },
  {
    id: "v3-pnw-luxury",
    label: "V3 — PNW luxury A",
    description: "Modern Pacific Northwest — warm neutrals, editorial",
    component: lazy(() => import("./v3-pnw-luxury/App")),
  },
  {
    id: "v4-pnw-luxury-b",
    label: "V4 — PNW luxury B",
    description: "Pacific Northwest — sage, airy, modern studio",
    component: lazy(() => import("./v4-pnw-luxury-b/App")),
  },
];

export const defaultVersionId =
  versions.find((v) => v.default)?.id ?? versions[0].id;

export function getVersionById(id: string): VersionEntry {
  return versions.find((v) => v.id === id) ?? versions.find((v) => v.default)!;
}

export function getVersionIndex(id: string): number {
  const index = versions.findIndex((v) => v.id === id);
  return index === -1 ? 0 : index;
}
