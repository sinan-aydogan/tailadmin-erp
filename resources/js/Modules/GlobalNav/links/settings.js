import {
    IconSettingsCog,
    IconShieldCog
} from "@tabler/icons-vue"
import {i18n} from "@/Language/index.js";

export default function () {
    const t = i18n.global.t

    const settings = {
        id: 'settings',
        label: t('globalNavigator.settings'),
        links: [
            {
                id: 'settings.globalSettings',
                label: t('globalNavigator.globalSettings'),
                icon: IconSettingsCog
            },
            {
                id: 'settings.rolesAndPermissions',
                label: t('globalNavigator.rolesAndPermissions'),
                icon: IconShieldCog
            }
        ]
    }

    return {
        settings
    }
}
