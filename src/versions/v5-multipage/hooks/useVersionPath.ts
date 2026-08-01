/**
 * Absolute path under the site root.
 * `useVersionPath()` → `/`
 * `useVersionPath("about")` → `/about`
 * `useVersionPath("about/dr-beth-shaw")` → `/about/dr-beth-shaw`
 */
export function useVersionPath(segment = ""): string {
  if (!segment) return "/";
  return `/${segment.replace(/^\//, "")}`;
}
