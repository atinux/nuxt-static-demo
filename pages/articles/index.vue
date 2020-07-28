<template>
  <div>
    <h1>Articles</h1>
    <blockquote>Discover beautiful articles from Unsplash pictures.</blockquote>
    <article v-for="article of articles" :key="article.slug">
      <NuxtLink :to="`/articles/${article.slug}`">
        <h3>{{ article.title }}</h3>
        <img :src="article.imageUrl" width="150" />
      </NuxtLink>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi }) {
    const articles = await $strapi.$articles.find()

    return { articles }
  },
  head: {
    title: 'Articles'
  }
}
</script>
