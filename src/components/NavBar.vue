<script setup lang="ts">
import { onMounted, ref } from "vue";
import FontAwesomeIcon from "../plugins/fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
}

onMounted(() => {
  const savePreference = localStorage.getItem("darkMode");
  if (savePreference) {
    isDarkMode.value = JSON.parse(savePreference);
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
});

</script>

<template>
  <nav class="border-b border-gray-700">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4 px-8">
      <a
        href="#"
        class="flex items-center space-x-3 rtl:space-x-reverse dark:text-white"
      >
        <font-awesome-icon
          icon="fa-solid fa-computer"
          class="w-8 h-8 text-black dark:text-white"
        />
        <span
          class="text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-indigo-500 vai-purple-500 to-pink-500 bg-clip-text text-transparent"
          >Computer Shop</span
        >
      </a>
      <div class=" flex space-x-3">
        <button><font-awesome-icon icon="fa-solid fa-cart-shopping" /></button>
        <button @click="toggleDarkMode">
          <font-awesome-icon :icon="isDarkMode ? faSun : faMoon" />
        </button>

        <div class="relative hidden md:block flex-grow max-w-xs">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none z-10"
        >
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="w-4 h-4"
          />
        </div>
        <input
          type="text"
          placeholder="Search"
          class="block w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-full dark:bg-black dark:border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none hover:ring-2 hover:ring-primary transition ease-in-out duration-200 transform"
        />
      </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>