/*Import language files*/
const tr = import.meta.glob('./tr/*.json', {eager: true})
const en = import.meta.glob('./en/*.json', {eager: true})

/*Generate languages object*/
let languages = {
    tr: tr,
    en: en
}

let translates = {}

for (const [lang, module] of Object.entries(languages)) {

    translates[lang] = {}

    for (const path in module) {

        let terms = module[path].default
        let abbr = String(path).slice(5, path.length - 5)

        translates[lang][abbr] = terms
    }

}

export {translates}


