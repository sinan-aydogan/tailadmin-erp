/*Import language files*/
const tr = import.meta.glob('./tr/*.json')
const en = import.meta.glob('./en/*.json')

/*Generate languages object*/
let languages = {
    tr: tr,
    en: en
}

let translates = {}

for(const [key , value] of Object.entries(languages)){

    for (const path in value) {
        value[path]().then((mod) => {
            let abbr = String(path).slice(5, path.length-5)
            let terms= {}
            terms[abbr] = mod.default
            translates[key] = terms
        })
    }
}

export {translates}


