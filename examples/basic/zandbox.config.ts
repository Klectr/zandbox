import type { ZandboxConfig } from "../../engine/config";
import { exampleStories } from "./stories/example.stories";

const config: ZandboxConfig = {
  name: "Zandbox — basic example",
  stories: [...exampleStories],
  assets: {},
  designMd: "DESIGN.md",
};

export default config;
