import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      dark: {
        primary: "#0088CC",
        secondary: "#5e5f76",
        accent: "#699fc8",
        info: "#1b1922",
        success: "#4DD79C",
        warning: "#ed9c28",
        danger: "#D2312D",
        error: "#D2312D",
        background: "#1D2127",
        breakcrumbbar: "#171717",
        card: "#2e353e"
      }
    },
    dark: true
  },
  icons: {
    iconfont: "mdi"
    // values: {
    //   cancel: "fas fa-ban",
    //   dashboard: "fas fa-ellipsis-v"
    // }
  }
});
