import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@sharing/organisms": path.resolve(
        __dirname,
        "/src/ui/sharing/organisms/index.ts"
      ),
      "@sharing/molecules": path.resolve(
        __dirname,
        "/src/ui/sharing/molecules/index.ts"
      ),
      "@sharing/atoms": path.resolve(
        __dirname,
        "/src/ui/sharing/atoms/index.ts"
      ),
      "@atoms": path.resolve(__dirname, "/src/ui/home/atoms/index.ts"),
      "@molecules": path.resolve(__dirname, "/src/ui/home/molecules/index.ts"),
      "@organisms": path.resolve(__dirname, "/src/ui/home/organisms/index.ts"),
      "@images": path.resolve(__dirname, "/src/assets/images"),
      "@icons": path.resolve(__dirname, "/src/assets/icons"),
      "@mixins": path.resolve(__dirname, "/src/styles/mixins.ts"),
      "@data": path.resolve(__dirname, "/src/logic/data"),
      "@schemas": path.resolve(__dirname, "/src/logic/schemas"),
      "@services": path.resolve(__dirname, "/src/logic/services"),
      "@handlers": path.resolve(__dirname, "/src/logic/handlers"),
      "@hooks": path.resolve(__dirname, "/src/logic/utils/hooks/index.ts"),
      "@utils": path.resolve(__dirname, "/src/logic/utils"),
      "@constants": path.resolve(__dirname, "/src/logic/utils/constants"),
      "@functions": path.resolve(__dirname, "/src/logic/utils/functions"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@typing": path.resolve(__dirname, "src/typing"),
    },
  },
});
