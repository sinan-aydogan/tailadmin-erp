<script setup>
/*Components*/
import InputText from 'primevue/inputtext';
import {IconSearch, IconX} from "@tabler/icons-vue"

/*Stores*/
import {useGlobalNavStore} from "@/Modules/GlobalNav/globalNavStore.js";

const globalNavStore = useGlobalNavStore()
</script>

<template>
    <div class="flex w-full mb-4">
        <div class="flex items-center w-full">
            <IconSearch class="absolute ml-4"/>
            <InputText
                type="text"
                v-model="globalNavStore.searchTerm"
                :pt="{
                    root: { class: 'flex w-full pl-4', style: 'padding-left: 3rem', placeholder: $t('globalNavigator.search')}
                }"

            />
            <IconX v-if="globalNavStore.searchTerm" class="absolute right-10 cursor-pointer" @click="globalNavStore.searchTerm=''"/>
        </div>
    </div>
</template>

<style scoped>

</style>
