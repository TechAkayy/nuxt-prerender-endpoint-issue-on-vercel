import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  nitro: {
    preset: 'vercel-static',
  },

  future: {
    compatibilityVersion: 4,
  },

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({autoImport: true}))
      })
    },
    //...
  ],
  vite: {
    mode: 'development',
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    build: {
      minify: false,
    },
    // server: {
    //   cors: true, // Only for dev
    // },
  },
  sourcemap: true,
})
