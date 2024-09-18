<script setup lang="ts">
import { ref } from "vue";
import { categories as categoriesData } from "../data/categoriesData";

const categories = ref(categoriesData);
const isHovered = ref(false);
</script>

<template>
  <aside
    :class="[
      'h-screen px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex-shrink-0 transition-all duration-300 ease-in-out',
      { 'w-[300px]': isHovered, 'w-[60px]': !isHovered },
    ]"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Sidebar header -->
    <div class="flex items-center py-1 relative z-20">
      <font-awesome-icon icon="fa-solid fa-bars" class="w-6 h-6" />
      <h2
        v-if="isHovered"
        class="font-bold text-2xl transition-opacity duration-300 ease-in-out ml-2"
      >
        Categories
      </h2>
    </div>

    <!-- Sidebar navigation -->
    <nav class="mt-6 flex flex-col gap-2">
      <ul class="flex flex-col gap-2">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="flex items-center justify-start gap-2 py-2"
        >
          <a class="flex items-center space-x-4">
            <!-- Icon -->
            <font-awesome-icon
              :icon="category.icon"
              class="w-6 h-6 flex-shrink-0"
            />
            <!-- Text -->
            <span
              class="whitespace-nowrap transition-opacity duration-300 ease-in-out"
              :class="isHovered ? 'opacity-100' : 'opacity-0'"
              style="width: 180px;"
            >
              {{ category.name }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
/* Text will always have a reserved width */
span {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  height: 24px; /* Match the icon height */
  line-height: 24px; /* Vertically center the text with the icon */
}
</style>
