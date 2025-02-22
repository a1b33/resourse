<template>
    <div class="iapp">
        <img src="../../images/bg2.jpeg" alt="">
        <start style="z-index: 1000;"></start>
    </div>
</template>
<script setup>
import start from './start.vue'
</script>
<style>
.iapp img {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>