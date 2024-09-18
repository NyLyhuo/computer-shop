<script setup lang="ts">
import Hero from '../components/Hero.vue';
import ProductCard from '../components/ProductCard.vue';


interface Product {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    title: 'iPhone 16',
    description: 'The latest and most powerful iPhone yet.',
    price: 999.99,
    imageUrl: 'https://m.media-amazon.com/images/I/71Q93Ate8fL._AC_SL1500_.jpg'
  },
  {
    title: 'Samsung Galaxy S30',
    description: 'Next-gen Samsung phone with excellent features.',
    price: 899.99,
    imageUrl: 'https://via.placeholder.com/300?text=Samsung+Galaxy+S30'
  },
  {
    title: 'Google Pixel 8',
    description: 'Google’s innovative and sleek smartphone.',
    price: 799.99,
    imageUrl: 'https://via.placeholder.com/300?text=Google+Pixel+8'
  },
  {
    title: 'Sony Xperia XZ4',
    description: 'Sony’s new flagship with stunning display.',
    price: 849.99,
    imageUrl: 'https://via.placeholder.com/300?text=Sony+Xperia+XZ4'
  }
];
</script>

<template>
    <Hero />
    <h2 class="italic text-2xl font-bold px-6 pt-8">Best sell</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        <ProductCard v-for="product in products" :key="product.title" :product="product"/>
    </div>
</template>

<style scoped>

</style>