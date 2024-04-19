# Proof of Crabs (web application)

Web application to monitor the Proof of Crab frames

This repository is associated to a farcaster frames application that can be accessed at https://github.com/jbblanc/ffc-proof-of-crab-frames

## Accessing official version

Head to [Proof of Crab](https://ffc-proof-of-crab-app.vercel.app)

This app is built with [SvelteKit](https://kit.svelte.dev/), uses a [Supabase](https://supabase.com/) backend and runs with [Vercel](https://vercel.com/).

## Running locally

### Important note

This app requires a supabase application to run locally. This part of the application is not shared at the moment.

Once you've cloned the repo and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```
