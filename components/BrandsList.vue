<template>
  <div class="brands-wrapper">
    <h2 class="brands-header">Бренды</h2>
    <ul class="brands-list">
      <li class="brands-item" v-for="brand in brands" :key="brand.id" @click="selectBrand(brand.id)" :class="{ 'selected': selectedBrand === brand.id }">
        {{ brand.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    brands: Array
  },
  data() {
    return {
      selectedBrand: null
    };
  },
  methods: {
    selectBrand(brandId) {
      this.$emit('brandSelected', brandId);
      this.selectedBrand = brandId;
    }
  }
};
</script>

<style scoped lang="scss">
  .brands-wrapper {
    padding: 1em 0.3em;
  }
  .brands-list {
    list-style: none;
    .brands-item {
      cursor: pointer;
      padding: 0.5em;
      margin: 0.2em 0;
      border-radius: 0.3em;
      &:hover {
        background-color: #dddddd;
      }
    }
    .selected {
      background-color: #4CAF50;
      color: white;
      &:hover {
        background-color: #4CAF50;
      }
    }
  }
</style>