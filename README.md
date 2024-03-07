# Kamae Challenge

## Dev

### Local

To serve the app locally

```bash
npm install
npm run dev
```

### Docker

Run the app using Docker Compose

```bash
docker compose up
```

App will auto reload on modification

Access the app at `locahost:5173`

## CI

A Github CI workflow for deploying to Github Pages is described in `.github/workflows/static-page.yml`

## Production

To build the app, run

```bash
npm run build
```

The app is deployed at (https://tdnghia98.github.io/kamae-challenge/)[https://tdnghia98.github.io/kamae-challenge/]

### Docker

Currently it is not possible to deploy to Github Pages subpage and use the docker production build. To use docker with production build, remove the `base` property from the vite config in `vite.config.ts`

```typescript
export const defaultConfig: UserConfig = {
    server: {
        host: true,
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/kamae-challenge/',
};
```

Then run

```bash
docker compose -f docker-compose.prod.yml up
```

The app is now accessible at `localhost`
