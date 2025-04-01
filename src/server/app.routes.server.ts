import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'registration',
    renderMode: RenderMode.Client,
  },
  {
    path: 'channels/:channel',
    renderMode: RenderMode.Client,
  },
  {
    path: ':channel',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
];
