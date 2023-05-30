<script>


export default{
  name: 'AppHome',
  
}

</script>

<template>
    <h1>Benvenuto nella Home page</h1>

    <div class="my-flex">
      <router-link :to="{name: 'AboutUs'} ">About Us</router-link>
      <router-link :to="{name: 'ProjectIndex'} ">ProjectIndex</router-link>
    </div>
</template>

<style scoped lang="scss">
    .my-flex{
      display: flex;
      flex-direction: row;
      gap: 2em;
    }
</style>