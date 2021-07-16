<template>
<n-layout class="main-n-layout">
  <textarea id="text-area" />
  <n-button @click="showModal = true">保存</n-button>
</n-layout>

  <n-modal
        v-model:show="showModal"
        preset="dialog"
        title="Dialog"
        :show-icon="false"
    >
        <template #header>
            <div>编辑标题</div>
        </template>
        <div>
            <n-input
                v-model:value="title"
                type="input"
                placeholder="请填写笔记标题..."
            />
        </div>

        <template #action>
            <n-button @click="save()"> 确定 </n-button>
        </template>
    </n-modal>
</template>

<script setup>
import { computed, onMounted, ref, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import {
    NList,
    NListItem,
    NButton,
    NSpace,
    NThing,
    NModal,
    NInput,
    NGradientText,
    NTooltip
} from "naive-ui";
import draggable from "vuedraggable";
import EasyMDE from "easymde";
import router from "../router"
import { v4 as uuidv4 } from 'uuid';
const store = useStore();
let easyMDE;
onMounted(() => {
  const dom = document.getElementById("text-area"); 
  easyMDE = new EasyMDE({
    element : dom,
    toolbar: [
            "bold",
            "italic",
            "heading",
            "|",
            "quote",
            "unordered-list",
            "ordered-list",
            "|",
            "link",
            "image",
            "|",
            "preview",
        ],
        spellChecker: false,
        delay: 1000,
  });
  if(store.state.MdeList.length > 0){
    easyMDE.value(store.state.MdeList[0].content)
    title.value = store.state.MdeList[0].title 
  }
})

const save = () =>{
   router.push("preview");
}

onBeforeUnmount(() => {
    onSave();
});

const initTask = {
    title:"",
    status: "INCOMPLETE",
    content:""
};
let showModal = ref(false);
let title = ref(initTask.title);

//分为自动保存和主动保存两种模式
const onSave = (flag) => {
    let task = {
      ...initTask,
      id :uuidv4(),
      content: easyMDE.value(),
      title:title.value,
    };  

    if(store.state.MdeList.length == 0){
        //内容为空,并且标题为空则不保存
      if(task.content === ""){
        if(task.title === ""){
          showModal.value = false;
          return 1
        }
      }else if(task.content != ""){
        //内容不为空,标题为空的时候用内容当标题
        if(task.title === ""){
          task.title = task.content
        }
      } 
      store.commit("addContent", task);  
    }else if(store.state.MdeList.length > 0){
      if(task.content === ""){
        if(task.title === ""){
          showModal.value = false;
          return 1
        }
      }else if(task.content != ""){
        if(task.title === ""){
          task.title = task.content
        }
      } 
      store.commit("updateContent", task);
    }
    store.commit("deleteMdeList");
    router.push("preview");
};
</script>

<style>
.main-n-layout{
  text-align: left;
}

</style>