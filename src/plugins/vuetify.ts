/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VFileUpload } from "vuetify/labs/VFileUpload";

// Composables
import { createVuetify } from "vuetify";

import spacegt from "spacegt";

const { en, zhHans } = spacegt.locales;

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    // defaultTheme: 'dark',
  },
  locale: {
    locale: "zhHans",
    messages: { en, zhHans },
  },
  defaults: {
    title: import.meta.env.VITE_APP_TITLE,
  },
  components: {
    VFileUpload,
  },
});
