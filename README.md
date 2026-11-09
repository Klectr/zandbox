# Zandbox

A dev-only component lab for Bun + HTMX projects: a Storybook-shaped sandbox
with no rendering library and no build step. Components are server-template
functions and Web Components; Zandbox renders them in every state against the
project's own stylesheets, with fictional data only.

## Layout

- `engine/` — the whole engine, self-contained: server, story contract, the
  DESIGN.md token parser, and the init CLI. This directory is exactly what
  lands in a host project's `.zandbox/`; it imports nothing from any host.
- `examples/basic/` — a minimal host project wired to the engine, with a
  welcome story and a sample DESIGN.md (run it with `bun run demo`).

## Adopting Zandbox in a project

From your project root, run the init CLI from a checkout of this repo:

```
bun run /path/to/zandbox/engine/cli.ts init
```

Init copies `engine/` into your project's `.zandbox/`, writes a starter
`zandbox.config.ts` and `stories/example.stories.ts`, and adds a `zandbox`
package script. It never overwrites: if a config already exists, it refuses
and changes nothing. From then on, `bun run zandbox` starts the lab on
127.0.0.1 (port: `ZANDBOX_PORT` env, then config, then 8935).

The full contract — the config shape, story rules, the Tokens story, and the
routes — lives in [engine/README.md](engine/README.md), which also ships
into host projects with the engine.

## Development

```
bun test        # engine tests
bun run demo    # the basic example, on port 8935
```

## License

MIT
