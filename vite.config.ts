import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "postcss";

function scopeSnesCss(): Plugin {
  return {
    name: "scope-snes-css",
    async transform(code, id) {
      const path = id.replace(/\\/g, "/");
      if (!path.includes("/snes.css/") || !path.includes(".css")) {
        return null;
      }

      const root = postcss.parse(code);
      root.walkRules((rule) => {
        const parent = rule.parent;
        if (
          parent?.type === "atrule" &&
          "name" in parent &&
          parent.name === "keyframes"
        ) {
          return;
        }

        rule.selectors = rule.selectors.map((selector) => {
          const trimmed = selector.trim();
          if (trimmed.includes(".snes-page")) {
            return trimmed;
          }
          if (trimmed.includes(":root")) {
            return trimmed.replaceAll(":root", ".snes-page");
          }
          if (/^(html|body)\b/.test(trimmed)) {
            return trimmed
              .replace(/\bhtml\b/g, ".snes-page")
              .replace(/\bbody\b/g, ".snes-page");
          }
          return `.snes-page ${trimmed}`;
        });
      });

      return {
        code: root.toString(),
        map: null,
      };
    },
  };
}

export default defineConfig({
  plugins: [scopeSnesCss(), react()],
});
