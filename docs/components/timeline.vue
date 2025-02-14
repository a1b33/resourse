<template>
    <el-timeline style="max-width: 600px">
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
            :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
            :timestamp="activity.timestamp">
            {{ activity.content }}
        </el-timeline-item>
    </el-timeline>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'
import type { TimelineItemProps } from 'element-plus'

interface ActivityType extends Partial<TimelineItemProps> {
    content: string
}

const activities: ActivityType[] = [
    {
        content: 'HTML,CSS',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: MoreFilled,
    },
    {
        content: 'JavaScript',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87',
    },
    {
        content: 'ES6,ES6+',
        timestamp: '2018-04-03 20:46',
        size: 'large',
    },
    {
        content: 'node基础与前端工程化',
        timestamp: '2018-04-03 20:46',
        type: 'primary',
        hollow: true,
    },
    {
        content: '网络请求',
        timestamp: '2018-04-03 20:46',
    },
    {
        content: 'Vue',
        timestamp: '2018-04-03 20:46',
    },
    {
        content: 'React',
        timestamp: '2018-04-03 20:46',
    },
    {
        content: '进阶内容...',
        timestamp: '2018-04-03 20:46',
    },
]
</script>