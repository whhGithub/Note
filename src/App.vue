<template>
    <div id="app">
        <n-layout>
            <n-layout-header>
               <h1>简单笔记</h1>
                <n-button @click="switchTitle">
                    <span>{{ routeName }}</span>
                </n-button>
            </n-layout-header>
                
            <n-layout-content>
                <router-view />
            </n-layout-content>
        </n-layout>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NGridItem,
    NButton,
    NGrid,
    NH1,
    NGradientText
} from "naive-ui";
import router from "./router/index.js"
import { useRoute } from "vue-router";
const route = useRoute()
const routeName = computed(() => {
    if(route.name === "main") return "预览页"
    if(route.name === "preview") return "编辑页"
})
const switchTitle = () => {
    if(route.name === "main"){
        router.push("preview")
    };
    if(route.name === "preview"){
        router.push("main");
    } 
}
</script>
<style lang="postcss" scoped>
#app {
    background: #f5f5f5;

    & .n-layout-header {
        text-align: center;
        border-bottom: 1px solid #e6e6e6;
    }

    & .n-layout-content {
        margin: auto;
        padding: 16px;
        max-width: 720px;
        /* text-align: left; */
    }
    & .n-button{
    }
}
</style>