## Description

Nodejs SSR example with [nestjs](https://docs.nestjs.com/),
[markojs](https://markojs.com/docs/getting-started/), and [tailwind](https://tailwindcss.com/)

Marko templates go in `app` directory.

## Running the app

### Production

```shell
npm run build
npm run start:prod # prod build
```

### Dev

```shell
npm run start:dev
```

Dev mode:

- Runs nest in watch mode so nest server reloads on changes inside `src/`.
- Run vite dev server which does hot module reloading on changes inside `app/`.
- Add tailwind jit cdn script for prototyping in web inspector.

## Stackblitz

https://stackblitz.com/github/amardeep/marko-nest
