import { useEffect, useState } from "react";
import { Bell, MoreHorizontal } from "lucide-react";

export function DynamicIsland() {
  const [expanded, setExpanded] = useState(false);
  const [time, setTime] = useState(() => new Date());
  const [notifications, setNotifications] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    const n = setInterval(
      () => setNotifications((p) => (p >= 9 ? 1 : p + 1)),
      4000,
    );
    return () => {
      clearInterval(t);
      clearInterval(n);
    };
  }, []);

  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-label="Dynamic Island"
        className={`pointer-events-auto flex items-center justify-center gap-3 bg-black/80 backdrop-blur-md text-white rounded-full shadow-lg ring-1 ring-white/10 transition-all duration-500 ease-out overflow-hidden cursor-pointer hover:bg-black/90 ${
          expanded ? "w-72 h-12 px-5" : "w-24 h-8 px-3"
        }`}
      >
        {expanded ? (
          <div className="flex items-center justify-between w-full animate-fade-in">
            <div className="flex items-center gap-2 text-sm font-medium tabular-nums">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {hh}:{mm}:{ss}
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <Bell className="h-4 w-4" />
              <span className="font-semibold">{notifications}</span>
              <span className="text-white/60 text-xs">new</span>
            </div>
          </div>
        ) : (
          <MoreHorizontal className="h-4 w-4 text-white/80" />
        )}
      </button>
    </div>
  );
}

export default DynamicIsland;
