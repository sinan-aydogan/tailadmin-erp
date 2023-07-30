<script setup>
/*Components*/
import SearchResultItem from "@/Modules/GlobalNav/SearchResultItem.vue";
import {IconMoodAnnoyed} from "@tabler/icons-vue"

/*Stores*/
import {useGlobalNavStore} from "@/Modules/GlobalNav/globalNavStore.js";

const globalNavStore = useGlobalNavStore()
</script>

<template>
   <transition name="fade" mode="out-in">
       <!--Search result-->
       <div
           v-if="globalNavStore.searchResult.length > 0"
           class="mt-6 border px-4 py-2 rounded divide-y"
       >
           <SearchResultItem
               v-for="link in globalNavStore.searchResult"
               :key="link.id"
               v-bind:link="link"
           />
       </div>

       <!--No result-->

       <div
           v-else
           class="flex justify-center gap-2 items-center mt-6 border px-4 py-2 rounded text-amber-600 border-amber-500"
       >
           <IconMoodAnnoyed/>
           <p class="text-center">{{ $t('globalNavigator.noResults') }}</p>
       </div>
   </transition>

</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all .3s ease-in-out;
    overflow: hidden;
}

.fade-enter-from, .fade-lave-to{
    opacity: 0;
}
</style>
