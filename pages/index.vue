<template>
  <div class="wrapper">
    <BrandsList @brandSelected="filterProductsByBrand" :brands="brands" />
    <ProductsList :products="filteredProducts" />
  </div>
</template>
<script>
import BrandsList from '~/components/BrandsList.vue';
import ProductsList from '~/components/ProductsList.vue';

export default {
  data() {
    return {
      brands: [],
      products: [],
      selectedBrand: null
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => this.selectedBrand === null || product.brand === this.selectedBrand);
    }
  },
  methods: {
    async fetchBrands() {
      try {
        const response = await fetch('/brands.json');
        this.brands = await response.json();
      } catch (error) {
        console.error('Ошибка при загрузке данных брендов:', error);
      }
    },
    async fetchProducts() {
      try {
        const response = await fetch('/level3/products.json');
        this.products = await response.json();
      } catch (error) {
        console.error('Ошибка при загрузке данных продуктов:', error);
      }
    },
    filterProductsByBrand(brandId) {
      this.selectedBrand = brandId;
    }
  },
  async mounted() {
    await this.fetchBrands();
    await this.fetchProducts();
  },
  components: {
    BrandsList,
    ProductsList
  }
};
</script>
<style scoped lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
</style>