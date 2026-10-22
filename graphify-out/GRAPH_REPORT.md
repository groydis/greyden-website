# Graph Report - greyden-website  (2026-10-08)

## Corpus Check
- 19 files · ~190,322 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 15 file(s) not represented in the graph (top: .css 4, .woff 3, .woff2 3)

## Summary
- 128 nodes · 157 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ecaf4805`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.tsx
- compilerOptions
- compilerOptions
- package.json
- devDependencies
- proxyBlog
- .oxlintrc.json
- scripts
- dependencies
- GreyDOS 1.0
- tsconfig.json

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 18 edges
2. `compilerOptions` - 15 edges
3. `proxyBlog()` - 9 edges
4. `react-router-dom` - 7 edges
5. `Seo()` - 7 edges
6. `scripts` - 6 edges
7. `react` - 5 edges
8. `GreyDOS 1.0` - 4 edges
9. `rules` - 3 edges
10. `isNewsPost()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `onRequest()` --calls--> `proxyBlog()`  [EXTRACTED]
  functions/_astro/[[path]].js → functions/_lib/blog-proxy.js
- `onRequest()` --calls--> `proxyBlog()`  [EXTRACTED]
  functions/_emdash/api/[[path]].js → functions/_lib/blog-proxy.js
- `onRequest()` --calls--> `proxyBlog()`  [EXTRACTED]
  functions/news/[[path]].js → functions/_lib/blog-proxy.js
- `proxyBlog()` --calls--> `isNewsPost()`  [EXTRACTED]
  functions/_lib/blog-proxy.js → functions/_lib/h-entry.js
- `proxyBlog()` --calls--> `rewriteNewsPost()`  [EXTRACTED]
  functions/_lib/blog-proxy.js → functions/_lib/h-entry.js

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.13
Nodes (18): react, react-dom, react-router-dom, snes.css, App(), Projects, src_index, About() (+10 more)

### Community 1 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 2 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 3 - "package.json"
Cohesion: 0.13
Nodes (13): name, private, type, version, oxlint, ref_postcss, @types/node, @types/react (+5 more)

### Community 4 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, oxlint, @types/node, @types/react, @types/react-dom, typescript, vite, @vitejs/plugin-react (+1 more)

### Community 5 - "proxyBlog"
Cohesion: 0.28
Nodes (6): onRequest(), onRequest(), proxyBlog(), isNewsPost(), rewriteNewsPost(), onRequest()

### Community 6 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 7 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, deploy, dev, lint, preview

### Community 8 - "dependencies"
Cohesion: 0.40
Nodes (5): dependencies, react, react-dom, react-router-dom, snes.css

### Community 9 - "GreyDOS 1.0"
Cohesion: 0.40
Nodes (4): Build, Deploy to Cloudflare Pages, GreyDOS 1.0, Local development

## Knowledge Gaps
- **73 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 83 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `react` connect `App.tsx` to `package.json`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `react-router-dom` connect `App.tsx` to `package.json`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _73 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12962962962962962 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._