<template>
  <div>
    <h1>{{ page.title }}</h1>
    <p>{{ page.body }}</p>
    <blockquote>The source code is available on <a href="https://github.com/Atinux/nuxt-static-demo">GitHub</a></blockquote>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const page = await $strapi.$pages.findOne('index')

    return { page }
  },
  head() {
    return {
      title: this.page.title
    }
  }
}
</script>
