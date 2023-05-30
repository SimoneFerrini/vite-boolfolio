<script>


export default{
  name: 'AppProjectIndex',
  
}

</script>

<template>
    <h1>Benvenuto nella lista progetti</h1>
    
    <div class="my-flex">
      <router-link :to="{name: 'home'} ">Homepage</router-link>
      <router-link :to="{name: 'AboutUs'} ">About Us</router-link>
    </div>
</template>

<style scoped lang="scss">
    .my-flex{
      display: flex;
      flex-direction: row;
      gap: 2em;
    }
</style>