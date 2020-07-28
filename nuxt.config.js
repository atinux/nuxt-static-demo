export default {
  target: 'static',
  modules: ['@nuxtjs/strapi'],
  plugins: ['~/plugins/preview.client.js'],
  strapi: {
    url: 'https://atinux-strapi.herokuapp.com',
    entities: ['pages', 'articles']
  }
}
