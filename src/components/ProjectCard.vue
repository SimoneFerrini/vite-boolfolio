<script>
export default {
    name: 'ProjectCard',

    data() {
        return {
            imgUrl: 'http://127.0.0.1:8000/',
        }
    },

    props: {
        project: Object,
    },

    computed: {

        shortContent() {
            if (this.project.description.length > 30) {
                return this.project.description.substring(0, 30) + '...';
            } else {
                return this.project.description;
            }
        },

        cover() {
            if (this.project.cover_image == null) {
                return 'https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg';
            } else {
                return this.imgUrl + 'storage/' + this.project.cover_image;
            }
        },
    }
}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="img-container">
            <img :src="cover" class="cover-img card-img-top" alt="img">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ shortContent }}</p>
            <small>Type: {{ project.type ? project.type.title : '-' }}</small>
            <div class="my-tech-container">
                <span>Tecnologie utilizzate:</span>
                <div class="d-flex justify-content-between overflow-x-auto">
                    <div v-if="project.technologies.length > 0">

                        <span class="badge rounded-pill bg-primary" v-for="technology in project.technologies">
                            {{ technology.name }}
                        </span>
                    </div>
                    <span v-else> - </span>              
                </div>
            </div>
            <div class="text-center py-3">
                <router-link :to="{name: 'ProjectShow', params:{slug: project.slug}}" class="btn btn-outline-danger">Apri Progetto</router-link>
            </div>


        </div>
    </div>
</template>


<style scoped lang="scss">
.cover-img {
    height: 200px;
    object-fit: cover;
    object-position: center;
}

.my-tech-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
}
</style>