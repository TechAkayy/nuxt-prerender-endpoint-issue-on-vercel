<script setup lang="ts"></script>

<template>
  <v-app>
    <p>This works!</p>
    <HotDeals class="mt-8" />
    <v-main class="py-4">
      <p>This doesn't work, check app.vue!</p>
      <HotDeals class="mt-8" />
    </v-main>
  </v-app>
</template>
