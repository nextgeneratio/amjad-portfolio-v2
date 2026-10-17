"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useSyncExternalStore } from "react";

import { themeStore } from "@/lib/theme-store";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getTheme,
    themeStore.getServerTheme,
  );
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const saved = window.localStorage.getItem("theme");
      if ((saved === "light" || saved === "dark") && saved !== theme) {
        themeStore.setTheme(saved);
        return;
      }
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      data-testid="theme-toggle"
      onClick={() => themeStore.setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="h-4 w-4" suppressHydrationWarning />
      ) : (
        <Moon className="h-4 w-4" suppressHydrationWarning />
      )}
    </button>
  );
}
