# GreyDOS 1.0

Personal site for Greyden Scott — a GeoCities / Windows 98 homage, rebuilt as a Vite + React app for [Cloudflare Pages](https://developers.cloudflare.com/pages/).

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output lands in `dist/`.

## Deploy to Cloudflare Pages

From this repo:

```bash
npx wrangler login
npm run deploy
```

Or connect the GitHub repo in the Cloudflare dashboard:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |

The site will be available at `https://greyden-website.pages.dev` (or a custom domain you attach).
