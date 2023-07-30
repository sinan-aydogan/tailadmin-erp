<script setup>
import {onMounted, ref} from "vue";
import {IconChevronDown} from "@tabler/icons-vue";

defineProps({
    group: {
        type: Object,
        default: () => ({
            label: ''
        })
    }
})

const showGroup = ref(true)
const toggleGroup = () => {
    showGroup.value = !showGroup.value
}

const groupRef = ref(null)
const groupHeight = ref('0px')

onMounted(() => {
    groupHeight.value = `${groupRef.value.getBoundingClientRect().height}px`
})
</script>

<template>
    <!--Wrapper-->
    <div>
        <!--Header-->
        <div class="flex gap-2 items-center mb-2 mt-4 cursor-pointer" @click="toggleGroup">
            <h3 class="font-bold">{{ group.label }}</h3>
            <IconChevronDown size="20"/>
        </div>

        <!--Links-->
        <div class="flex">
            <transition name="fade">
                <div
                    v-show="showGroup"
                    ref="groupRef"
                    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-12 gap-4"
                >
                    <slot/>
                </div>
            </transition>
        </div>

    </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all .7s ease-in-out;
    overflow: hidden;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
    max-height: 0;
}

.fade-enter-to, .fade-leave-from {
    max-height: v-bind(groupHeight);
}
</style>
