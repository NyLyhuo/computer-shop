<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Categories from "./components/Categories.vue"
</script>

<template>
    <NavBar />
    <Categories />
    <main>
      <router-view />
    </main>
</template>