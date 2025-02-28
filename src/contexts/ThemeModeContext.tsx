import React from "react";
import { ThemeModeContextType } from "./types.themeMode.ts";

export const ThemeModeContext = React.createContext<ThemeModeContextType | null>(null);
