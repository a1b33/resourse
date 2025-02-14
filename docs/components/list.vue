<script>
import Card from './card.vue'
export default {
    components: {
        Card,
    },
    props: {
        list: {
            type: Array,
            default: []
        },
    },
}
</script>
<template>
    <div class="card">
        <div v-for="(item, index) in list" :key="index" class="card-item">
            <Card :item="item"></Card>
        </div>
    </div>
</template>
<style scoped>
.card {
    display: flex;
    flex-wrap: wrap;
}
.card-item {
    margin: 20px 10px;
}
</style>