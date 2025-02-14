<script>
    import minicard from '../../components/minicard.vue'
    import minilist from '../../components/minilist.vue'
    import timeline from '../../components/timeline.vue'
    export default {
        components: {
            minicard,
            minilist,
            timeline,
        },
        data() {
            return {
                list: [
                    {
                        title: 'HTML5',
                        desc: 'html5是最新一代html标准',
                        img:'https://img.tukuppt.com/png_preview/00/44/11/rRVWAj1i1f.jpg!/fw/780',
                        link:'https://www.runoob.com/html/html-tutorial.html'
                    },
                    {
                        title: 'CSS3',
                        desc: 'CSS3是最新一代css标准',
                        img:'https://ts1.cn.mm.bing.net/th/id/R-C.a7cebeb99993a404e066bf77426b588c?rik=USsraq5SJRgS3A&riu=http%3a%2f%2ffthmb.tqn.com%2fs9kfBeuaF14VAGgE-SjDB-L0ZDs%3d%2f768x0%2ffilters%3ano_upscale()%3amax_bytes(150000)%3astrip_icc()%2fcss3-57b597e85f9b58b5c2b338de.png&ehk=sh1ldd5fzr0NebFeWiLjeUSD%2f3dbtE%2b7a5ZmL9%2f08NI%3d&risl=&pid=ImgRaw&r=0',
                        link:'https://baidu.com/'
                    },
                    {
                        title: 'JavaScript',
                        desc: '一门弱类型脚本语言',
                        img:'https://tse1-mm.cn.bing.net/th/id/OIP-C.B2rSOuM-PIdNMumAJ9BaRwHaHa?rs=1&pid=ImgDetMain',
                        link:'https://baidu.com/'
                    },
                    {
                        title: 'Tailwind CSS',
                        desc: '一个功能丰富的css框架',
                        img:'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp',
                        link:'https://baidu.com/'
                    },
                    {
                        title: 'ES6',
                        desc: 'ES6 是 JavaScript 语言的下一代标准',
                        img:'https://ts1.cn.mm.bing.net/th/id/R-C.c6184123110b8d9dd2cf9814ad018b13?rik=5XGXC5GcPbuZ9w&riu=http%3a%2f%2fjc.aaajy.net%2fcourse%2fcommon%2fupload%2f2021%2f01%2f29%2f20210129125832tl.png&ehk=j5WHh4jpInIiPyTOiPKd%2fU3XuMQ7qVR4NAlAKiS%2baEc%3d&risl=&pid=ImgRaw&r=0',
                        link:'https://baidu.com/'
                    },
                    {
                        title: 'Vue3',
                        desc:"Vue3 是一个渐进式JavaScript框架。",
                        img:'https://cn.vuejs.org/logo.svg',
                        link:'https://baidu.com/'
                    },
                    {
                        title:'vue2',
                        desc:"Vue2 是一个渐进式JavaScript框架。",
                        img:'https://cn.vuejs.org/logo.svg',
                        link:'https://v2.cn.vuejs.org/'
                    },
                    {
                        title:'Vue Router',
                        desc:"Vue.js的官方路由",
                        img:'https://cn.vuejs.org/logo.svg',
                        link:'https://v2.cn.vuejs.org/'
                    },
                    {
                        title:'Pinia',
                        desc:"Vue3新一代状态管理工具",
                        img:'https://pinia.vuejs.org/logo.svg',
                        link:'https://pinia.vuejs.org/'
                    },
                    {
                        title:'Vuex',
                        desc:"Vue2状态管理工具",
                        img:'https://cn.vuejs.org/logo.svg',
                        link:'https://vuex.vuejs.org/'
                    }
                ]
            }
        }
    }
</script>
<style module>
    @media (min-width: 1440px) {
    .VPContent.has-sidebar[data-v-98ddab3d] {
        padding-right: 10px;
    }
}
@media (min-width: 1280px) {
    .VPDoc .aside[data-v-10119189] {
        display: none;
    }
}
.VPDoc.has-aside .content-container[data-v-10119189] {
    max-width: 6688px;
}
@media (min-width: 1440px) {
    .VPNavBar.has-sidebar .content[data-v-cf6e7c5e] {
        padding-right: 10px;
    }
}
</style>
# 前端指北
<minilist :list="list"></minilist>
<timeline></timeline>