<script setup lang="ts">
  // const {data: jobs, error} = await useFetch('https://api.nuxt.com/jobs')

  const {data, error} = await useFetch('/api/store')

  prerenderRoutes(`/api/store`)

  const {products} = data.value

  if (error.value) {
    console.log(error.value)
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch products.`,
    })
  }
</script>
<template>
  <div>
    <span>Total items: {{ products.length }}, removed useFetch params</span>
  </div>
</template>
<style scoped></style>
