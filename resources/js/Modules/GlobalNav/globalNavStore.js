import Apps from "./links/apps.js";
import Settings from "./links/settings.js";
import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useGlobalNavStore = defineStore('globalNavStore', () => {
    const {apps} = Apps()
    const {settings} = Settings()

    const links = [apps, settings]

    const searchTerm = ref('')
    const search = (model)=>{
        return model.filter((link)=>{
            if(link.label.toLocaleLowerCase().includes(searchTerm.value.toLocaleLowerCase())){
                return link
            }
        })
    }

    const searchResult = computed(()=>{
        if(searchTerm.value){
            const appSearchResults = search(apps.links)
            const settingsSearchResults = search(settings.links)

            return [...appSearchResults, ...settingsSearchResults]
        }else {
            return links
        }

    })

    return {
        links,
        searchTerm,
        searchResult
    }
})
