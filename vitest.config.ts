import baseConfig from "@mkvlrn/config/vitest" with { type: "json" };
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(baseConfig, defineConfig({}));
