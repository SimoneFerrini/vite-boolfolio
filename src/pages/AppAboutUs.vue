<script>


export default{
  name: 'AppAboutUs',
  
}

</script>

<template>
    <h1>About Us: beh siamo bravissimi &hearts; </h1>
   
    <div class="my-flex">
      <router-link :to="{name: 'home'} ">Homepage</router-link>
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