// vite.config.ts
import { defineConfig } from "file:///Users/ricardo/Documents/personal/technical_test/node_modules/vite/dist/node/index.js";
import react from "file:///Users/ricardo/Documents/personal/technical_test/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/ricardo/Documents/personal/technical_test";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@services",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/services")
      },
      {
        find: "@sharing/organisms",
        replacement: path.resolve(
          __vite_injected_original_dirname,
          "src/ui/sharing/organisms/index.ts"
        )
      },
      {
        find: "@sharing/molecules",
        replacement: path.resolve(
          __vite_injected_original_dirname,
          "src/ui/sharing/molecules/index.ts"
        )
      },
      {
        find: "@sharing/atoms",
        replacement: path.resolve(__vite_injected_original_dirname, "src/ui/sharing/atoms/index.ts")
      },
      {
        find: "@typing",
        replacement: path.resolve(__vite_injected_original_dirname, "src/typing")
      },
      {
        find: "@atoms",
        replacement: path.resolve(__vite_injected_original_dirname, "src/ui/home/atoms/index.ts")
      },
      {
        find: "@molecules",
        replacement: path.resolve(__vite_injected_original_dirname, "src/ui/home/molecules/index.ts")
      },
      {
        find: "@organisms",
        replacement: path.resolve(__vite_injected_original_dirname, "src/ui/home/organisms/index.ts")
      },
      {
        find: "@images",
        replacement: path.resolve(__vite_injected_original_dirname, "src/assets/images")
      },
      {
        find: "@icons",
        replacement: path.resolve(__vite_injected_original_dirname, "src/assets/icons")
      },
      {
        find: "@mixins",
        replacement: path.resolve(__vite_injected_original_dirname, "src/styles/mixins.ts")
      },
      {
        find: "@data",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/data")
      },
      {
        find: "@schemas",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/schemas")
      },
      {
        find: "@services",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/services")
      },
      {
        find: "@handlers",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/handlers")
      },
      {
        find: "@hooks",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/utils/hooks/index.ts")
      },
      {
        find: "@utils",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/utils")
      },
      {
        find: "@constants",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/utils/constants")
      },
      {
        find: "@functions",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/utils/functions")
      },
      {
        find: "@styles",
        replacement: path.resolve(__vite_injected_original_dirname, "src/styles")
      },
      {
        find: "@config",
        replacement: path.resolve(__vite_injected_original_dirname, "src/logic/config.ts")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmljYXJkby9Eb2N1bWVudHMvcGVyc29uYWwvdGVjaG5pY2FsX3Rlc3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yaWNhcmRvL0RvY3VtZW50cy9wZXJzb25hbC90ZWNobmljYWxfdGVzdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmljYXJkby9Eb2N1bWVudHMvcGVyc29uYWwvdGVjaG5pY2FsX3Rlc3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQHNlcnZpY2VzXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9sb2dpYy9zZXJ2aWNlc1wiKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQHNoYXJpbmcvb3JnYW5pc21zXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgIFwic3JjL3VpL3NoYXJpbmcvb3JnYW5pc21zL2luZGV4LnRzXCJcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQHNoYXJpbmcvbW9sZWN1bGVzXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgX19kaXJuYW1lLFxuICAgICAgICAgIFwic3JjL3VpL3NoYXJpbmcvbW9sZWN1bGVzL2luZGV4LnRzXCJcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQHNoYXJpbmcvYXRvbXNcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL3VpL3NoYXJpbmcvYXRvbXMvaW5kZXgudHNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkB0eXBpbmdcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL3R5cGluZ1wiKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQGF0b21zXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy91aS9ob21lL2F0b21zL2luZGV4LnRzXCIpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogXCJAbW9sZWN1bGVzXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy91aS9ob21lL21vbGVjdWxlcy9pbmRleC50c1wiKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQG9yZ2FuaXNtc1wiLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvdWkvaG9tZS9vcmdhbmlzbXMvaW5kZXgudHNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBpbWFnZXNcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2Fzc2V0cy9pbWFnZXNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBpY29uc1wiLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvYXNzZXRzL2ljb25zXCIpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogXCJAbWl4aW5zXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9zdHlsZXMvbWl4aW5zLnRzXCIpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogXCJAZGF0YVwiLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbG9naWMvZGF0YVwiKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQHNjaGVtYXNcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2xvZ2ljL3NjaGVtYXNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBzZXJ2aWNlc1wiLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbG9naWMvc2VydmljZXNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBoYW5kbGVyc1wiLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbG9naWMvaGFuZGxlcnNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBob29rc1wiLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbG9naWMvdXRpbHMvaG9va3MvaW5kZXgudHNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkB1dGlsc1wiLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbG9naWMvdXRpbHNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBjb25zdGFudHNcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2xvZ2ljL3V0aWxzL2NvbnN0YW50c1wiKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IFwiQGZ1bmN0aW9uc1wiLFxuICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbG9naWMvdXRpbHMvZnVuY3Rpb25zXCIpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogXCJAc3R5bGVzXCIsXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9zdHlsZXNcIiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiBcIkBjb25maWdcIixcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2xvZ2ljL2NvbmZpZy50c1wiKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVSxTQUFTLG9CQUFvQjtBQUMvVixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsTUFDM0Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUs7QUFBQSxVQUNoQjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSztBQUFBLFVBQ2hCO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsK0JBQStCO0FBQUEsTUFDdEU7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDbkQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyw0QkFBNEI7QUFBQSxNQUNuRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGdDQUFnQztBQUFBLE1BQ3ZFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsZ0NBQWdDO0FBQUEsTUFDdkU7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxNQUMxRDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQ3pEO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsc0JBQXNCO0FBQUEsTUFDN0Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUN2RDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLE1BQzFEO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsTUFDM0Q7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxNQUMzRDtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLGdDQUFnQztBQUFBLE1BQ3ZFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsTUFDeEQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLEtBQUssUUFBUSxrQ0FBVywyQkFBMkI7QUFBQSxNQUNsRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLDJCQUEyQjtBQUFBLE1BQ2xFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ25EO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDNUQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
