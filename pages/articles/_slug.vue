<template>
  <div>
    <h3>{{ article.title }}</h3>
    <img :src="article.imageUrl" />
    <p>{{ article.body }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params }) {
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
