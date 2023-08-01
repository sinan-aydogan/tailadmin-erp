<script setup>
defineProps({
    link: {
        type: Object,
        default: () => ({
            label: ''
        })
    }
})
</script>

<template>
<div class="flex flex-col justify-center items-center text-center border rounded p-4 hover:border-slate-300 hover:shadow cursor-pointer select-none">
    <span v-text="link.label" class="font-semibold"></span>
</div>
</template>

<style scoped>

</style>
