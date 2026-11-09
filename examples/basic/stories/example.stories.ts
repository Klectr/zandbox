import type { Story } from "../../../engine/story";

export const exampleStories: Story[] = [
  {
    id: "example-welcome",
    group: "Example",
    title: "Welcome — replace with a real component",
    render: () =>
      `<p style="max-width:52ch;line-height:1.6">This story proves your Zandbox works.
      Delete it and add a <b>.stories.ts</b> file per component: import the component,
      export a Story array, and register it in zandbox.config.ts.</p>`,
  },
];
