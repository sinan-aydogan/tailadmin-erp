import {
    IconBuildingWarehouse,
    IconTopologyStar3,
    IconUsersGroup,
    IconBriefcase,
    IconTrolley,
    IconPackages,
    IconComponents,
    IconCar,
    IconUserBolt,
    IconDevices2,
    IconShoppingCart,
    IconCash,
    IconRuler,
    IconRulerMeasure,
    IconTallymark4,
    IconMoodSearch
} from "@tabler/icons-vue"
import {i18n} from "@/Language/index.js";

export default function (){
    const t = i18n.global.t

    const apps = {
        id: 'apps',
        label: t('globalNavigator.apps'),
        links: [
            {
                id: 'apps.organization',
                label: t('globalNavigator.organization'),
                icon: IconTopologyStar3,
                modules: [
                    {
                        id: 'apps.organization.departments',
                        label: t('globalNavigator.departments'),
                    }
                ],
                summaries: [
                    {
                        id: 'apps.organization.distribution_of_employees_by_departments',
                        label: t('globalNavigator.distribution_of_employees_by_departments'),
                    }
                ]
            },
            {
                id: 'apps.employees',
                label: t('globalNavigator.employees'),
                icon: IconUsersGroup,
            },
            {
                id: 'apps.customers',
                label: t('globalNavigator.customers'),
                icon: IconBriefcase,
            },
            {
                id: 'apps.suppliers',
                label: t('globalNavigator.suppliers'),
                icon: IconTrolley
            },
            {
                id: 'apps.warehouses',
                label: t('globalNavigator.warehouses'),
                icon: IconBuildingWarehouse
            },
            {
                id: 'apps.materials',
                label: t('globalNavigator.materials'),
                icon: IconComponents
            },
            {
                id: 'apps.products',
                label: t('globalNavigator.products'),
                icon: IconPackages
            },
            {
                id: 'apps.inventories',
                label: t('globalNavigator.inventories'),
                icon: IconTallymark4
            },
            {
                id: 'apps.vehicles',
                label: t('globalNavigator.vehicles'),
                icon: IconCar

            },
            {
                id: 'apps.hrTransactions',
                label: t('globalNavigator.hrTransactions'),
                icon: IconUserBolt
            },
            {
                id: 'apps.recruitment',
                label: t('globalNavigator.recruitment'),
                icon: IconMoodSearch
            },
            {
                id: 'apps.assets',
                label: t('globalNavigator.assets'),
                icon: IconDevices2
            },
            {
                id: 'apps.purchases',
                label: t('globalNavigator.purchases'),
                icon: IconShoppingCart
            },
            {
                id: 'apps.sales',
                label: t('globalNavigator.sales'),
                icon: IconCash
            },
            {
                id: 'apps.measuringDevices',
                label: t('globalNavigator.measuringDevices'),
                icon: IconRuler
            },
            {
                id: 'apps.mdcr',
                label: t('globalNavigator.calibrations'),
                icon: IconRulerMeasure
            }
        ]
    }

    return {
        apps
    }
}
