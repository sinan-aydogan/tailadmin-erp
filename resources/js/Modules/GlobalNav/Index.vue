<script setup>
/*Components*/
import NavGroup from "@/Modules/GlobalNav/NavGroup.vue";
import NavItem from "@/Modules/GlobalNav/NavItem.vue";
import SearchBar from "@/Modules/GlobalNav/SearchBar.vue";
import SearchResult from "@/Modules/GlobalNav/SearchResult.vue";
import SecondMenu from "@/Modules/GlobalNav/SecondMenu.vue";

/*Stores*/
import {useGlobalNavStore} from "@/Modules/GlobalNav/globalNavStore.js";

const globalNavStore = useGlobalNavStore()
</script>

<template>
    <div v-if="!globalNavStore.selectedSection">
        <SearchBar/>


        <div v-if="!globalNavStore.searchTerm">
            <NavGroup v-for="group in globalNavStore.links" v-bind:group="group" :key="group.id">
                <NavItem v-for="link in group.links" :key="link.id" v-bind:link="link" @click="globalNavStore.selectedSection = link.id"/>
            </NavGroup>
        </div>

        <SearchResult v-else/>
    </div>

    <div v-else>
        <SecondMenu :selectedSection="globalNavStore.secondMenuContent"/>
    </div>
</template>

<style scoped>

</style>
