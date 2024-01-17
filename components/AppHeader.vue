<template>
  <header>
    <img src="/images/logo.png" alt="Логотип" class="logo">
    <NuxtLink to="/cart">
      <v-btn class="cart-button" variant="text" stacked>
        <v-badge :content="cartStore.productsTotal" color="success">
          <v-icon>
            mdi-cart-outline
          </v-icon>
        </v-badge>
      </v-btn>
    </NuxtLink>
  </header>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 54px;
  background-color: #353535;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-button {
    padding: 0;
    max-height: 54px;
    border-radius: 0;
    background-color: #353535;
    color: white;
    border: none;
  }
}

</style>