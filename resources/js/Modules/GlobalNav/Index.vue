<script setup>
import NavGroup from "@/Modules/GlobalNav/NavGroup.vue";
import NavItem from "@/Modules/GlobalNav/NavItem.vue";
import SearchBar from "@/Modules/GlobalNav/SearchBar.vue";
import {useGlobalNavStore} from "@/Modules/GlobalNav/globalNavStore.js";
import SearchResult from "@/Modules/GlobalNav/SearchResult.vue";

const globalNavStore = useGlobalNavStore()
</script>

<template>
    <div>
        <SearchBar/>

        <div v-if="!globalNavStore.searchTerm">
            <NavGroup v-for="group in globalNavStore.links" v-bind:group="group" :key="group.id">
                <NavItem v-for="link in group.links" :key="link.id" v-bind:link="link"/>
            </NavGroup>
        </div>

        <SearchResult v-else/>
    </div>
</template>

<style scoped>

</style>
