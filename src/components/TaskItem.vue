<template>
    <n-list-item class="task-item-wrapper">
        <template #prefix>
            <n-icon size="16">
                <drag-indicator-outlined />
            </n-icon>
        </template>
        <swiper
            :initial-slide="1"
            :slides-per-view="1"
            :resistance-ratio="0.75"
            :speed="200"
            @transitionEnd="onTransitionEnd"
        >
            <swiper-slide class="finish-slide">完成</swiper-slide>
            <swiper-slide class="content-slide" @click="onClick">{{ task.content }}</swiper-slide>
            <swiper-slide class="delete-slide">删除</swiper-slide>
        </swiper>
    </n-list-item>
</template>

<script setup>
import { defineProps, defineEmit } from "vue";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { NListItem, NIcon } from "naive-ui";
import { DragIndicatorOutlined } from "@vicons/material";

const props = defineProps({
    task: Object,
    taskIndex: Number,
});
const emit = defineEmit(["delete","edit","finish"]);

const onTransitionEnd = (instance) => {
    const { activeIndex } = instance;
    if (activeIndex === 2) {
        emit("delete");
        instance.destroy();
    }else if(activeIndex === 0){
        emit("finish")
        instance.destroy();
    }
};

const onClick = (instance) => {
    emit("edit");
};
</script>

<style lang="postcss">
.task-item-wrapper {
    padding: 0 !important;
    border: 1px solid var(--merged-border-color);
    cursor: move;

    & .n-list-item__prefix {
        margin: 0px !important;
        padding: 8px;
        display: flex;
    }

    & .swiper-container {
        width: 100%;
        height: 100%;
        cursor: default;
    }

    & .swiper-slide {
        padding: 8px 0;
        display: flex;
        align-items: center;
        width: 100%;
    }
    & .content-slide{
        width:295.6px !important;
    }
    & .delete-slide {
        color: white;
        background: tomato;
        padding-left: 20px !important;
        justify-content: flex-start;
        box-sizing:border-box;
    }
    & .finish-slide {
        color: white;
        width:362px;
        background: rgb(25, 218, 111);
        justify-content: flex-end;
        box-sizing:border-box;
        padding-right: 20px !important;
    }
}

    .task-item-wrapper:not(:last-child) {
        border-bottom: none !important;
    }
</style>