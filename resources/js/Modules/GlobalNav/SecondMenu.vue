<script setup>
/*Main functions*/
import {i18n} from "@/Language/index.js";
import SecondMenuGroup from "@/Modules/GlobalNav/SecondMenuGroup.vue";
import SecondMenuItem from "@/Modules/GlobalNav/SecondMenuItem.vue";
import {IconChevronRight, IconArrowLeft} from "@tabler/icons-vue";

/*Stores*/
import {useGlobalNavStore} from "@/Modules/GlobalNav/globalNavStore.js";

defineProps({
    selectedSection: {
        type: Object,
        default: () => ({
            label: ''
        })
    }
})

const globalNavStore = useGlobalNavStore()
const t = i18n.global.t
const groups = [
    {
        id: 'modules',
        label: t('globalNavigator.modules'),
    },
    {
        id: 'summaries',
        label: t('globalNavigator.summaries')
    }
]
</script>

<template>
    <div>
        <!--Breadcrumb-->
        <div class="flex items-center text-lg font-semibold border-b pb-2 mb-4">
            <!--Main Menu Link-->
            <div @click="globalNavStore.selectedSection = ''" class="flex items-center gap-2 border px-2 py-1 rounded border-slate-300 cursor-pointer">
                <IconArrowLeft/>
                <span>
                {{ t('globalNavigator.mainMenu') }}
            </span>
            </div>

            <!--Divider-->
            <IconChevronRight/>

            <!--Selected Section Indicator-->
            <div class="flex items-center gap-2">
                <component v-if="selectedSection.icon" :is="selectedSection.icon"/>
                <span>
                {{ selectedSection.label }}
            </span>
            </div>
        </div>

        <!--Second Menu Groups and Links-->
        <SecondMenuGroup v-for="group in groups" :key="group.id" v-bind:group="group" class="mb-6 last:mb-0">
            <SecondMenuItem v-for="link in selectedSection[group.id]" :key="link.id" v-bind:link="link"/>
        </SecondMenuGroup>
    </div>
</template>

<style scoped>

</style>
