<script>
import Minicard from './minicard.vue';
export default {
    name: 'Minilist',
    components: {
        Minicard
    },
    props: {
        list: {
            type: Array,
            default: []
        },
    },
    data() {
        return {
            
        }
    },
    computed: {
        
    },
}
</script>
<template>
    <div class="minicard">
        <div v-for="(item, index) in list" :key="index" class="minicard-item">
            <Minicard :item="item"></Minicard>
        </div>
    </div>
</template>
<style scoped>
.minicard {
    display: flex;
    flex-wrap: wrap;
}
.minicard-item {
    margin: 20px 10px;
}
</style>