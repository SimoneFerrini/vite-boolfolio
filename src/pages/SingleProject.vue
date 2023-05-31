<script>
import axios from 'axios';

export default{
    name: 'SingleProject',

    data(){
        return{
            project: {},
            projectSlug: '',
        }
    },

    mounted(){
        
        this.projectSlug = this.$route.params.slug;
        this.getProject();
    },

    methods:{
        getProject(){
            axios.get('http://127.0.0.1:8000/api/projects/' + this.projectSlug).then(res =>{
                
                this.project = res.data.project;
            })
        }
    }
}
</script>

<template>
    <h1>{{ project.title }}</h1>
</template>

<style scoped lang="scss">

</style>