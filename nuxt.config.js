export default {
  target: 'static',
  plugins: ['~/plugins/preview.client.js'],
  modules: ['@nuxtjs/strapi'],
  strapi: {
    url: 'https://atinux-strapi.herokuapp.com',
    entities: ['pages', 'articles']
  },
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.xz.style/serve/inter.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css' }
    ]
  }
}
