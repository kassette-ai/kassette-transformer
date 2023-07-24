import Analytics from 'analytics'
import kassette from '../@analytics/kassette.js'


export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.provide('analytics', Analytics({
        app: 'kassette-transformer',
        debug: true,
        plugins: [
            kassette({
                sourceId: '2',
                endpoint: 'http://127.0.0.1:8088/extract',
            }),
        ]
    }))
})


