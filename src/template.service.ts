import { NestExpressApplication } from '@nestjs/platform-express';
import { ViteDevServer } from 'vite';

/**
 * In current setup, templates are exported via ssr entry point `app/index.js`
 * which vite bundles to output `dist/app/index.js`.
 *
 * getTemplates() returns templates module suitable for the current environment.
 * In production, it loads from precompiled templates - equivalent to:
 *   `import * as templates from '../dist/app/index';`
 * In development, vite dev server is used to load ssr entry:
 *   `vite.ssrLoadModule('app/index');
 *
 *  Based on vite setup in https://github.com/marko-js/examples/tree/master/examples/vite-express
 */
export class TemplateService {
  private readonly environment: string;
  private prodTemplates;
  private viteDevServer: ViteDevServer;

  constructor() {
    this.environment = process.env['NODE_ENV'] ?? 'development';
  }

  async init(app: NestExpressApplication) {
    if (this.environment == 'production') {
      const prodModule = '../dist/app';
      this.prodTemplates = await import(prodModule);
      return;
    }

    console.log('Init vite dev server');
    const vite = await import('vite');
    this.viteDevServer = await vite.createServer({
      server: { middlewareMode: true },
    });
    app.use(this.viteDevServer.middlewares);
  }

  async getTemplates() {
    if (this.environment == 'production') {
      return this.prodTemplates;
    }

    return await this.viteDevServer.ssrLoadModule('./app/index');
  }
}
