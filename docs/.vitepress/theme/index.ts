import { h } from "vue";
import Theme, { VPDocAsideSponsors } from "vitepress/theme";

import "./style.css";
import "./patch/increase-content-container-patch.css";
import "./patch/custom-block.patch.css";
import "./patch/table-style-patch.css";

// vue toast notification
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

// social blocks
// @ts-ignore
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
    app.use(ToastPlugin);
  },
};
