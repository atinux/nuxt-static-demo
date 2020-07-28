<template>
  <div>
    <h1>{{ article.title }}</h1>
    <img :src="article.imageUrl" />
    <p>{{ article.body }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $strapi }) {
    const article = await $strapi.$articles.findOne(params.slug)

    return { article }
  },
  head() {
    return {
      title: this.article.title
    }
  }
}
</script>
