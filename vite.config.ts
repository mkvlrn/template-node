import baseConfig from "@mkvlrn/config/vite" with { type: "json" };
import { defineConfig, mergeConfig } from "vite-plus";

export default mergeConfig(baseConfig, defineConfig({}));
