/** @type {import('tailwindcss').Config} */
import { screens as _screens } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      Agrandir: ["Agrandir"],
      Mulish: ["Mulish"],
    },
    screens: {
      xs: "275px",
      ..._screens,
    },
  },
};
export const plugins = [];
