import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  defaultVersionId,
  getVersionById,
  getVersionIndex,
  versions,
} from "../../versions/registry";

export function VersionPicker() {
  const { versionId } = useParams<{ versionId: string }>();
  const navigate = useNavigate();
  const currentId = versionId ?? defaultVersionId;
  const current = getVersionById(currentId);
  const index = getVersionIndex(currentId);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    setAnnouncement(`Showing ${current.label}`);
  }, [current.label]);

  const goToIndex = (nextIndex: number) => {
    const wrapped =
      (nextIndex + versions.length) % versions.length;
    navigate(`/v/${versions[wrapped].id}`);
  };

  return (
    <div
      className="fixed top-4 right-4 z-[60] flex items-center gap-2 bg-[var(--brand-ink)] text-white text-xs shadow-lg rounded-sm px-3 py-2 max-w-[calc(100vw-2rem)]"
      role="region"
      aria-label="Prototype version switcher"
    >
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
      <span className="hidden sm:inline font-medium opacity-70 shrink-0">
        Prototype
      </span>
      <button
        type="button"
        onClick={() => goToIndex(index - 1)}
        className="p-1 hover:opacity-70 transition-opacity shrink-0"
        aria-label="Previous version"
      >
        <ChevronLeft size={16} aria-hidden="true" />
      </button>
      <label className="flex flex-col min-w-0">
        <span className="sr-only">Select prototype version</span>
        <select
          value={currentId}
          onChange={(e) => navigate(`/v/${e.target.value}`)}
          className="bg-transparent border border-white/30 rounded px-2 py-1 text-xs font-semibold max-w-[11rem] sm:max-w-none truncate"
        >
          {versions.map((v) => (
            <option key={v.id} value={v.id} className="text-[var(--brand-ink)]">
              {v.label}
            </option>
          ))}
        </select>
        <span className="text-[10px] opacity-60 mt-0.5 truncate hidden sm:block">
          {current.description}
        </span>
      </label>
      <button
        type="button"
        onClick={() => goToIndex(index + 1)}
        className="p-1 hover:opacity-70 transition-opacity shrink-0"
        aria-label="Next version"
      >
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
