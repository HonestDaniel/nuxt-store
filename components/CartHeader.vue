<template>
  <header>
    <div>
      <NuxtLink to="/">
        <img src="/images/logo.png" alt="Логотип" class="logo">
      </NuxtLink>
    </div>
  </header>
</template>

<script>
export default {
  name: "CartHeader"
}
</script>

<style scoped lang="scss">
  header {
    height: 54px;
    background-color: #353535;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>