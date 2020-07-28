<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div v-text="page.body"></div>
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
