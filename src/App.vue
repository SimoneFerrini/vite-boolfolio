<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default{
  name: 'App',

  data(){
    return{
      projects: [],
    }
  },

  components:{
    ProjectCard,
  },  

  created() {
    this.getProjects();
  },

  methods:{
    getProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then(res =>{
        this.projects = res.data.results;
      });
    }
  },
}

</script>

<template>
  <h1 class="text-center">I miei progetti: </h1>
  <div class="text-center w-75 mx-auto d-flex justify-content-between row">
    <div v-for="project in projects" class="col-4 mb-5">
      <ProjectCard :project="project"></ProjectCard>
    </div>

  </div>
  
</template>

<style scoped lang="scss">
</style>
