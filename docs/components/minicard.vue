<template>
    <div class="card">
        <el-card shadow="never">
            <template #header>
                <div class="icon">
                    <img :src="item.img" alt="">
                </div>
                <h5 class="head-title">{{ item.title }}</h5>
            </template>
            <div class="content">
                <p class="desc">{{ item.desc }}</p>
            </div>
        </el-card>
    </div>
</template>
<script>
export default{
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
<style>
.vp-doc p{
    margin: 0;
    padding: 0;
}
.card {
    width:250px;
    height:110px;
        transition: transform 0.3s;
}
.card:hover{
    outline: 1px solid red;
    transform: scale(1.02);
    

}
.el-card{
    background-color: rgb(221, 221, 221,0.3);
}
.el-card:hover{
background-color: #fff;
}
.icon {
    width: 40px;
    height: 40px;
    background-color: rgba(142, 150, 170, 0.14);
    padding:8px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 20px;
}
.icon img {
    width: 24px;
    height: 24px;
}
.head-title{
    display: inline-block;
    height: 40px;
    line-height: 40px;
}
.el-card__header{
    display: flex;
    padding-bottom: 5px;
    border-bottom: 0;
}
.el-card__body{
    padding: 10px 20px;
}
.el-card__body p{
    overflow: hidden;
        /* 超出部分显示省略号 */
        text-overflow: ellipsis;
        /* 对象做为弹性盒子模型显示 */
        display: -webkit-box;
        /* 块容器 中的内容限制为指定的行数。 */
        -webkit-line-clamp: 2;
        /* 弹性盒子对象的子元素排列方式为竖排 */
        -webkit-box-orient: vertical;
}
.content .desc{
    font-size: 12px;
}
</style>