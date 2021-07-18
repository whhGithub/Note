<template>
  <n-space vertical>
      <n-list v-if="contentList.length">
          <draggable
                :list="contentList"
                @start="drag = true"
                @end="drag = false"
                item-key="id"
            >
             <template #item="{index,element}">
                 <n-card closable = "true" @close="onDelete(index)" hoverable = "true">
                 <div style="font-size:23px">{{element.title}}</div>
                 <n-button @click="Update(index)">编辑</n-button>
                </n-card>
            </template>
          </draggable>
            <br>
            <n-button @click="add">添加</n-button>
      </n-list>
      <n-thing v-else> 你还未有任何笔记噢 </n-thing>
  </n-space>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import {
    NList,
    NListItem,
    NButton,
    NSpace,
    NThing,
    NModal,
    NInput,
    NCard,
    NGradientText
} from "naive-ui";
import draggable from "vuedraggable";
import router from "../router"
import EasyMDE from "easymde";
const add = () =>{
    router.push("main");
}
const store = useStore();
const contentList = computed(() => store.state.contentList);
const onDelete = (index) => {
    store.commit("deleteContent", index);
};
const Update = (idx) => {
    store.commit("toUpdate",idx);
    console.log(idx)
    router.push("main");
}
</script>
<style lang="postcss" scoped>
 .n-card{
    text-align: left;
 }
 .n-card .n-button{
   float: right;
 }
</style>