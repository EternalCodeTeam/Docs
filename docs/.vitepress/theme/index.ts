// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'

import './style.css'
import './patch/increase-content-container-patch.css'
import './patch/disable-adsite-patch.css'

// vue toastification
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({ app, router, siteData }) {
        app.use(Toast, {
            transition: "Vue-Toastification__fade",
            maxToasts: 10,
            newestOnTop: true
            },
        );
    }
}
