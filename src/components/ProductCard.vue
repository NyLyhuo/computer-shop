<script setup lang="ts">
import { DefineProps } from 'vue';

interface Product {
    title: string;
    description: string;
    price: number;
    imgUrl: string;
}

const props = defineProps<{
    product: Product;
}>();
</script>

<template>
  <div class="relative shadow-md rounded-lg overflow-hidden max-w-xs mx-auto">
    <img :src="props.product.imgUrl" class="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
    <button class="absolute top-4 right-4 focus:outline-none">
      <font-awesome-icon icon="fa-solid fa-heart" class="w-6 h-6"/>
    </button>
    <div class="p-4">
      <h2 class="text-xl font-semibold">{{ props.product.title }}</h2>
      <p class="mt-2 text-gray-600">{{ props.product.description }}</p>
      <div class="flex items-center justify-between">
        <p class="mt-4 text-lg font-bold text-gray-900">$ {{ props.product.price }}</p>
        <button
          class="mt-4 bg-primary text-white py-2 px-3 rounded-md hover:bg-gradient-to-r from-primary to-secondary"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>