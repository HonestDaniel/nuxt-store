<template>
  <div class="product-wrapper">
    <h2 class="product-header">Каталог</h2>
    <ul class="product-cards">
      <li v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Product Image"/>
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">{{ product.regular_price.currency }} {{ product.regular_price.value }}</p>
        <button class="product-button" @click="cartStoreAdd(product.id)">
          Добавить в корзину
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useCartStore} from "../stores/cart.js";
const cartStore = useCartStore();
defineProps(['products']);
const cartStoreAdd = (productId) => {
  cartStore.add(productId);
};
</script>

<style scoped lang="scss">
  .product-wrapper {
    padding: 1em;
  }
  .product-header {
    padding-left: 0.4em;
  }
  .product-cards {
    padding: 1em 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 100%;
    grid-gap: 1em;
    justify-items: center;
    .product-card {
      max-width: 300px;
      border: 1px solid #ddd;
      border-radius: 0.2em;
      padding: 1.5em;
      background-color: white;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      .product-title {
        margin-bottom: 0.5em;
      }
      .product-price {
        margin-bottom: 0.5em;
      }
      .product-button {
        border: 1px solid #4CAF50;
        background-color: #4CAF50;
        color: white;
        font-size: 1em;
        padding: 0.5em;
        border-radius: 0.2em;
        &:hover {
          background-color: white;
          color: #4CAF50;
        }
      }
    }
  }

</style>