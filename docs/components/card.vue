<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({
                title: '',
                desc: '',
                img: '',
                link: '',
            })
        }
    }
}

</script>
<template>
    <div class="card">
        <a :href="item.link" target="_blank">
            <el-card style="width: 260px" shadow="hover">
                <template #header>
                    <img :src=item.img style="width: 100%;height: 160px;" />
                </template>
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-desc">{{ item.desc }}</p>
            </el-card>
        </a>
    </div>
</template>
<style scoped>
.vp-doc a{
    text-decoration: none;
}
.el-card__header{
    padding: 0px;
}
.card-title{
    font-size: 30px;
    font-weight: bold;
}
.card-desc{
    line-height: 30px;
}
.el-card__body{
  height: 190px;
}
.el-card__body p{
    /* 超出部分隐藏 */
        overflow: hidden;
        /* 超出部分显示省略号 */
        text-overflow: ellipsis;
        /* 对象做为弹性盒子模型显示 */
        display: -webkit-box;
        /* 块容器 中的内容限制为指定的行数。 */
        -webkit-line-clamp: 4;
        /* 弹性盒子对象的子元素排列方式为竖排 */
        -webkit-box-orient: vertical;
}
</style>