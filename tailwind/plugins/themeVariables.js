// tailwind/plugins/themeVariables.js
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase }) {
  addBase({
    ":root": {
      "--color-surface": "#FAFAF9",
      "--color-surface-secondary": "#FF7A74",
      "--color-primary": "#005C5C",
      "--color-primary-dark": "#003F3F",
      "--color-text": "#292926",
      "--color-text-primary": "#005C5C",
      "--color-text-secondary": "#FF7A74",
      "--color-text-muted": "#A3A39B",
      "--color-border": "#FAFAF9",
    },
    ".dark": {
      "--color-surface": "#292926",
      "--color-surface-secondary": "#005C5C",
      "--color-primary": "#FF7A74",
      "--color-primary-dark": "#E36B63",
      "--color-text": "#E2E1DA",
      "--color-text-primary": "#FF7A74",
      "--color-text-secondary": "#005C5C",
      "--color-text-muted": "#75756C",
      "--color-border": "#292926",
    },
  });
});