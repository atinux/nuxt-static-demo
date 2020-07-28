<template>
  <div v-if="article">
    <h3>{{ article.title }}</h3>
    <img :src="article.imageUrl" />
    <p>{{ article.body }}</p>
  </div>
  <div v-else>
    <h3>Article not found</h3>
    <NuxtLink to="/articles">Back to articles</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params }) {
    const article = await $strapi.$articles.findOne(params.slug).catch(e => null)

    return { article }
  }
}
</script>
