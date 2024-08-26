import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
// })



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // headers: {
    //   "Content-Security-Policy": `default-src 'self'; script-src 'self'; 
    //         style-src 'self'; img-src 'self' https://cdn.dummyjson.com data:;
    //         connect-src 'self' https://dummyjson.com/* https://dummyjson.com/products/category-list;
    //         font-src 'self';`,
    // },
    headers: {
      "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self'; img-src https://cdn.dummyjson.com/; connect-src 'self' https://dummyjson.com/ ;",
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "ShopKart",
        short_name: "ShopKart",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
