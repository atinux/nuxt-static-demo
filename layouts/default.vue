<template>
  <div>
    <header>
      <NuxtLink to="/">Home</NuxtLink> /
      <NuxtLink to="/articles">Articles</NuxtLink>
    </header>
    <Nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.xz.style/serve/inter.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css' }
    ]
  }
}
</script>
