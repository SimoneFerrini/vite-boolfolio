<script>

import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';


export default {
  name: 'AppProjectIndex',

  data() {
    return {
      apiUrl: 'http://127.0.0.1:8000/api/projects',

      projects: [],

      pagination: {},
    }
  },

  components: {
    ProjectCard,
  },

  created() {
    this.getProjects(this.apiUrl);
  },

  methods: {
    getProjects(apiUrl) {
      axios.get(apiUrl).then(res => {
        this.projects = res.data.results.data;
        this.pagination = res.data.results;
      });
    }
  },

}

</script>

<template>
  <h1>Benvenuto nella lista progetti</h1>

  <div class="container py-">
    <div class="text-center w-75 mx-auto d-flex justify-content-between row">
      <div v-for="project in projects" class="col-4 mb-5">
        <ProjectCard :project="project"></ProjectCard>
      </div>

      <div class="project-navigation">
        <button v-for="link in pagination.links" class="btn" v-html="link.label"
          :class="link.active ? 'btn-danger' : 'btn-outline-danger'" :disabled="link.url == null ? true : false"
          @click="getProjects(link.url)">

        </button>
      </div>
    </div>
  </div>

  <div class="my-flex">
    <router-link :to="{ name: 'home' }">Homepage</router-link>
    <router-link :to="{ name: 'AboutUs' }">About Us</router-link>
  </div>
</template>

<style scoped lang="scss">
.my-flex {
  display: flex;
  flex-direction: row;
  gap: 2em;
}

.project-navigation{
  display: flex;
  gap: 0.7em;
  justify-content: center;
  margin-bottom: 1.5em;
}
</style>