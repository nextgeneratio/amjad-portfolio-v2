export type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
};

type Listener = () => void;

let state: ThemeState = { theme: "dark" };
const listeners = new Set<Listener>();

export const themeStore = {
  getState(): ThemeState {
    return state;
  },
  getTheme(): Theme {
    return state.theme;
  },
  getServerTheme(): Theme {
    return "dark";
  },
  subscribe(listener: Listener): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  setTheme(theme: Theme): void {
    if (state.theme === theme) {
      return;
    }

    state = { theme };
    for (const listener of listeners) {
      listener();
    }
  },
};
