<script setup>
defineProps({
    link: {
        type: Object,
        default: () => ({
            label: '',
            url: '',
            icon: ''
        })
    }
})
</script>

<template>
    <div class="py-3 cursor-pointer hover:font-semibold">
        <a :href="link.url" class="flex items-center gap-2">
            <component v-if="link.icon" :is="link.icon"/>
            <span>{{ link.label }}</span>
        </a>
    </div>
</template>

<style scoped>

</style>
