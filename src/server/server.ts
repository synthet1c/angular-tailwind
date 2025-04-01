// Define __filename and __dirname globally
globalThis.__filename = fileURLToPath(import.meta.url);
globalThis.__dirname = dirname(global.__filename);
import 'reflect-metadata';

import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {NestFactory} from '@nestjs/core';
import {ExpressAdapter} from '@nestjs/platform-express';
import {AppModuleNest} from './app.module.nest';
// import '../data/seed';


const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);


/**
 * Initialize and Mount the NestJS Application
 */
async function bootstrapNestApp() {
  const nestApp = await NestFactory.create(AppModuleNest, new ExpressAdapter(app));
  nestApp.setGlobalPrefix('/api'); // All API routes will be under /api
  await nestApp.init();
}
bootstrapNestApp()
  .then(() => {
    console.log('NestJS application successfully bootstrapped.');
  })
  .catch((err) => {
    console.error('Failed to bootstrap NestJS application:', err);
  });


/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('*all', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
