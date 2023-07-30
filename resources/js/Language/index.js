import { createI18n } from 'vue-i18n'
import {translates} from "@/Language/translates.js";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: translates
})

export {
    i18n
}
