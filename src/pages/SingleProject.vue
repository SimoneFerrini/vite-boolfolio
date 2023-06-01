<script>
import axios from 'axios';

export default {
    name: 'SingleProject',

    data() {
        return {
            project: {},
            projectSlug: '',
            isLoading: true,
            projectFound: false,
            imgUrl: 'http://127.0.0.1:8000/',
        }
    },

    mounted() {

        this.projectSlug = this.$route.params.slug;
        this.getProject();
    },

    computed:{
        projectImg(){

            return this.imgUrl + 'storage/' + this.project.cover_image;
        }
    },

    methods: {
        getProject() {
            axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(res => {
                if (res.data.success) {

                    this.project = res.data.project;
                    this.projectFound = true;
                    this.isLoading = false;
                } else {
                    this.projectFound = false;
                    this.isLoading = false;
                }
            })
        }
    }
}
</script>

<template>
    <div v-if="isLoading">
        <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else>
        <div v-if="projectFound">
            <div class="my-img-container-show">
                <img :src="projectImg" alt="img">
            </div>
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
            <span>{{ project.type ? project.type.name : 'no type found' }}</span>
            <hr>
            <div v-if="project.technologies.length != 0">
                <span v-for="technology in project.technologies">
                    {{ technology.name }}
                </span>
            </div>
            <div v-else>
                ---
            </div>
        </div>
        <div v-else>
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path
                        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </symbol>
            </svg>
            <div class="alert alert-warning d-flex align-items-center" role="alert">
                <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Warning:">
                    <use xlink:href="#exclamation-triangle-fill" />
                </svg>
                <div>
                    File not found !!!
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.my-img-container-show{
    height: 400px;
    object-fit: cover;

    img{
        height: 100%;
    }
}
</style>