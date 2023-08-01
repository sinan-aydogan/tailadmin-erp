<script setup>
defineProps({
    group: {
        type: Object,
        default: () => ({
            label: ''
        })
    }
})
</script>

<template>
<div class="flex flex-col">
    <h3 class="font-bold mb-4">
        {{ group.label }}
    </h3>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-12 gap-4">
        <slot></slot>
    </div>
</div>
</template>

<style scoped>

</style>
