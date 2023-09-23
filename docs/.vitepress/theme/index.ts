import { h } from "vue";
import Theme, { VPDocAsideSponsors } from "vitepress/theme";

import "./style.css";
import "./patch/increase-content-container-patch.css";
import "./patch/custom-block.patch.css";
import "./patch/table-style-patch.css";

// vue toastification
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

// social blocks
import SocialBlock from "./social/SocialBlock.vue";

Theme.enhanceApp = ({ app }) => {
  app.component("VPDocAside", () => VPDocAsideSponsors);
};

export default {
  ...Theme,

  Layout() {
    return h(Theme.Layout, null, {
      "aside-bottom": () => h(SocialBlock),
    });
  },

  enhanceApp({ app, router, siteData }) {
    const toastOptions = {
      maxToasts: 10,
      // filter duplicates
      filterBeforeCreate: (toast, toasts) => {
        if (toasts.filter((t) => t.type === toast.type).length !== 0) {
          return false;
        }
        return toast;
      },
    };

    app.use(Toast, toastOptions);
  },
};
