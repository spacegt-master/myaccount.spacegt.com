/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import pinia from "./pinia";

// Types
import type { App } from 'vue'
import spacegt from 'spacegt'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(spacegt)
    .use(pinia)
}
