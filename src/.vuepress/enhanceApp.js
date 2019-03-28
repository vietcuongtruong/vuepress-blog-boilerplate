// .vuepress/enhanceApp.js

import VueProgressiveImage from 'vue-progressive-image'

export default ({
    Vue,
    options,
    router,
    siteData
}) => {
    Vue.use(VueProgressiveImage)
}
